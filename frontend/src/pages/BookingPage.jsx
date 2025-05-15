import React, { useState } from 'react';
import BookingForm from '../components/bookings/BookingForm';

const mockRooms = [
  { id: 'k01', name: 'Kamar Single', capacity: 2, price: '500.000', image: '/kamar1.jpg', description: 'Kamar nyaman untuk 2 orang dengan fasilitas lengkap.' },
  { id: 'k02', name: 'Kamar Double', capacity: 4, price: '600.000', image: '/kamar2.jpg', description: 'Kamar luas untuk keluarga kecil dengan pemandangan indah.' },
  { id: 'k03', name: 'Kamar King', capacity: 8, price: '1.000.000', image: '/kamar3.jpg', description: 'Kamar mewah dengan tempat tidur king size dan fasilitas premium.' },
];

const BookingPage = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBookClick = (room) => {
    setSelectedRoom(room);
  };

  const handleCloseForm = () => {
    setSelectedRoom(null);
  };

  const handleBookingComplete = (details) => {
    console.log("Booking Kamar Berhasil (Simulasi):", details);
    alert(`Booking ${details.itemName || 'Kamar'} untuk ${details.guestName} dari ${details.checkInDate || 'tanggal check-in'} sampai ${details.checkOutDate || 'tanggal check-out'} berhasil!`);
    setSelectedRoom(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Pilih Kamar yang Tersedia
        </h1>

        {selectedRoom && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 transition-opacity duration-300">
            <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full relative animate-fade-in-down">
              <button
                onClick={handleCloseForm}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                aria-label="Tutup"
              >
                &times;
              </button>
              <BookingForm
                itemToBook={selectedRoom}
                onClose={handleCloseForm}
                onBookingComplete={handleBookingComplete}
                itemType="Kamar"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockRooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={room.image}
                alt={`Gambar ${room.name}`}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{room.name}</h3>
                <p className="text-gray-600 mb-2 text-sm">{room.description}</p>
                <p className="text-gray-600 mb-1 text-sm">
                  <span className="font-medium">Kapasitas:</span> {room.capacity} orang
                </p>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  Rp {room.price} / malam
                </p>
                <button
                  onClick={() => handleBookClick(room)}
                  className="mt-auto w-full bg-blue-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 ease-in-out"
                >
                  Pesan Kamar Ini
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BookingPage;
