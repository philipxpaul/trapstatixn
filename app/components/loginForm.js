import { useState, useEffect } from 'react';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '../firebase-config';

export default function PhoneLoginForm() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [error, setError] = useState(null);
  const [recaptchaInitialized, setRecaptchaInitialized] = useState(false);

  useEffect(() => {
    // Initialize reCAPTCHA only once when the component mounts
    if (!window.recaptchaVerifier && !recaptchaInitialized) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(
          'recaptcha-container',
          {
            size: 'invisible',
            callback: (response) => {
              console.log('reCAPTCHA verified successfully');
            },
          },
          auth
        );

        window.recaptchaVerifier.render().then(() => {
          console.log("reCAPTCHA initialized successfully");
          setRecaptchaInitialized(true);
        });
      } catch (err) {
        console.error("Failed to initialize reCAPTCHA:", err);
        setError("Failed to initialize reCAPTCHA.");
      }
    }
  }, [recaptchaInitialized]);

  const handleSendCode = async (e) => {
    e.preventDefault();

    if (!recaptchaInitialized) {
      setError("reCAPTCHA is not ready yet. Please try again in a moment.");
      return;
    }

    console.log("Auth object:", auth);
    console.log("Phone Number:", `+91${phoneNumber}`);
    console.log("RecaptchaVerifier:", window.recaptchaVerifier);

    if (phoneNumber.length !== 10) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    try {
      const appVerifier = window.recaptchaVerifier;
      const fullPhoneNumber = `+91${phoneNumber}`;
      const confirmationResult = await signInWithPhoneNumber(auth, fullPhoneNumber, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      alert('Verification code sent to your phone.');
    } catch (err) {
      console.error("Error sending verification code:", err);
      setError(err.message);
    }
  };

  const handleVerifyCode = async (e) => {
    e.preventDefault();

    if (!verificationId) return;

    try {
      const credential = firebase.auth.PhoneAuthProvider.credential(verificationId, verificationCode);
      await auth.signInWithCredential(credential);
      alert('Phone number verified successfully!');
    } catch (err) {
      console.error("Error verifying code:", err);
      setError(err.message);
    }
  };

  const handlePhoneNumberChange = (e) => {
    // Allow only numeric characters, and limit to 10 digits
    const value = e.target.value.replace(/\D/g, '').slice(0, 10);
    setPhoneNumber(value);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Phone Login</h2>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={verificationId ? handleVerifyCode : handleSendCode} className="space-y-4">
        {!verificationId && (
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <div className="flex items-center">
              <span className="bg-gray-200 p-2 rounded-l border border-r-0 border-gray-300 text-gray-700">+91</span>
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
                className="w-full p-2 border rounded-r focus:outline-none focus:ring focus:ring-blue-300"
                placeholder="Enter 10-digit mobile number"
                pattern="[0-9]*" // Ensure only numbers are allowed
                inputMode="numeric" // Mobile users get numeric keyboard
                required
              />
            </div>
            <div id="recaptcha-container"></div>
          </div>
        )}
        {verificationId && (
          <div>
            <label className="block text-gray-700">Verification Code</label>
            <input
              type="text"
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
              placeholder="Verification Code"
              required
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded font-semibold hover:bg-blue-600"
        >
          {verificationId ? 'Verify Code' : 'Send Code'}
        </button>
      </form>
    </div>
  );
}
