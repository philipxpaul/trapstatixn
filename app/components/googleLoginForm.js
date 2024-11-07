"use client"; // Required for using hooks like useRouter in Next.js App Router
import { auth } from '../firebase-config'; // Import auth from your firebase config file
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useRouter } from 'next/navigation';// Import router from next/navigation

export default function GoogleLoginForm() {
  const router = useRouter(); // Initialize router for redirection

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      // Google access token, which you can use for further API requests
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;

      // The signed-in user info.
      const user = result.user;
      console.log("User Info: ", user);

      // Redirect to the booking page after successful login
      router.push('/booking'); // Change the route to your booking page
    } catch (error) {
      // Handle Errors here.
      console.error("Error during Google Sign-In: ", error);
      alert(`Error: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Login with Google</h2>
      <button
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 text-white py-2 rounded font-semibold hover:bg-red-600"
      >
        Sign in with Google
      </button>
    </div>
  );
}
