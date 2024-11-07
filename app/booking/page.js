// app/booking/page.js
"use client";
import { useAuth } from '../authContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../firebase-config';
import { TextField, Button } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function Booking() {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [whatsAppNumber, setWhatsAppNumber] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const db = getFirestore(app);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return null;
  }

  const handleBookingSubmit = async (e) => {
    e.preventDefault();

    if (!selectedService) {
      alert('Please select a service.');
      return;
    }

    alert('Service selection successful! Please choose your preferred date.');
    setShowCalendar(true);
  };

  const handleDateSubmit = async () => {
    try {
      await addDoc(collection(db, 'bookings'), {
        name: user.displayName || 'Unknown',
        email: user.email,
        whatsAppNumber,
        userId: user.uid,
        service: selectedService,
        bookingDate: selectedDate.toISOString(),
        createdAt: new Date(),
      });

      alert('Booking date successfully saved!');
      router.push('/thank-you');
    } catch (err) {
      console.error('Error saving booking date: ', err);
      alert('Booking date selection failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Booking Form</h2>
      <form onSubmit={handleBookingSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input
            type="text"
            value={user.displayName || 'Unknown'}
            readOnly
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            type="email"
            value={user.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700">WhatsApp Number</label>
          <input
            type="tel"
            value={whatsAppNumber}
            onChange={(e) => setWhatsAppNumber(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="WhatsApp Number"
            pattern="[0-9]*"
            inputMode="numeric"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Select Dreadlock Service</label>
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
            required
          >
            <option value="" disabled>Select a service...</option>
            <option value="Dreadlock Installation">Dreadlock Installation</option>
            <option value="Dreadlock Maintenance">Dreadlock Maintenance</option>
            <option value="Dreadlock Styling">Dreadlock Styling</option>
          </select>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Book Service
        </Button>
      </form>

      {showCalendar && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-center">Select Your Booking Date</h3>
          <div className="flex justify-center mb-4">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Booking Date"
                value={selectedDate}
                onChange={(newDate) => setSelectedDate(newDate)}
                renderInput={(params) => <TextField {...params} />}
                minDate={new Date()}
              />
            </LocalizationProvider>
          </div>
          <Button
            onClick={handleDateSubmit}
            variant="contained"
            color="primary"
            fullWidth
          >
            Confirm Booking Date
          </Button>
        </div>
      )}
    </div>
  );
}
