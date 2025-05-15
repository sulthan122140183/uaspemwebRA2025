import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const mockBookingHistory = [
  {
    id: 'b01',
    itemName: 'Kamar Single',
    checkInDate: '2023-07-01',
    checkOutDate: '2023-07-05',
    status: 'Completed',
  },
  {
    id: 'b02',
    itemName: 'Gazebo VIP',
    checkInDate: '2023-08-10',
    checkOutDate: '2023-08-12',
    status: 'Upcoming',
  },
];

const ProfilePage = () => {
  const { user } = useContext(AuthContext);
  const [bookingHistory, setBookingHistory] = useState([]);

  useEffect(() => {
    // Simulate fetching booking history for the user
    setBookingHistory(mockBookingHistory);
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg max-w-3xl">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Profil Pengguna</h1>
      <div className="bg-white p-8 rounded-lg shadow-md mb-10">
        <p className="text-lg mb-4"><strong>Email:</strong> {user.email}</p>
        <p className="text-lg mb-4"><strong>Nama:</strong> {user.name || 'Belum diisi'}</p>
        <p className="text-lg"><strong>Nomor Telepon:</strong> {user.phone || 'Belum diisi'}</p>
      </div>

      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Riwayat Booking</h2>
      {bookingHistory.length === 0 ? (
        <p className="text-gray-700">Tidak ada riwayat booking.</p>
      ) : (
        <ul className="space-y-6">
          {bookingHistory.map((booking) => (
            <li key={booking.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <p className="text-lg mb-2"><strong>Item:</strong> {booking.itemName}</p>
              <p className="text-gray-600 mb-1"><strong>Check-in:</strong> {booking.checkInDate}</p>
              <p className="text-gray-600 mb-1"><strong>Check-out:</strong> {booking.checkOutDate}</p>
              <p className={`font-semibold ${booking.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                Status: {booking.status}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProfilePage;
