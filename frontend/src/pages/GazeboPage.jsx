import React, { useState } from 'react';
import BookingForm from '../components/bookings/BookingForm';

const mockGazebos = [
  { id: 'g01', name: 'Gazebo Echo', capacity: 6, price: '35.000 / jam', image: '/gazebo1.jpg', description: 'Gazebo nyaman dengan pemandangan pantai yang indah.' },
  { id: 'g02', name: 'Gazebo Beach', capacity: 6, price: '40.000 / jam', image: '/gazebo2.jpg', description: 'Gazebo luas dengan fasilitas lengkap dan area santai.' },
  { id: 'g03', name: 'Gazebo Camp', capacity: 10, price: '50.000 / jam', image: '/gazebo3.jpg', description: 'Gazebo VIP dengan layanan eksklusif dan kenyamanan maksimal.' },
];

const GazeboPage = () => {
  const [selectedGazebo, setSelectedGazebo] = useState(null);

  const handleReserveClick = (gazebo) => {
    setSelectedGazebo(gazebo);
  };

  const handleCloseForm = () => {
    setSelectedGazebo(null);
  };

  const handleBookingComplete = (details) => {
    console.log("Reservasi Gazebo Berhasil:", details);
    alert(`Reservasi ${details.itemName} (${details.itemType}) untuk ${details.guestName} pada ${details.bookingDate} pukul ${details.bookingTime} selama ${details.duration} jam berhasil! Total Biaya: Rp ${details.totalPrice ? details.totalPrice.toLocaleString('id-ID') : 'N/A'}`);
    setSelectedGazebo(null);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Pilih dan Reservasi Gazebo Favorit Anda
        </h1>

        {selectedGazebo && (
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
                itemToBook={selectedGazebo}
                onClose={handleCloseForm}
                onBookingComplete={handleBookingComplete}
                itemType="Gazebo"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockGazebos.map((gazebo) => (
            <div
              key={gazebo.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <img
                src={gazebo.image}
                alt={`Gambar ${gazebo.name}`}
                className="w-full h-52 object-cover"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{gazebo.name}</h3>
                <p className="text-gray-600 mb-2 text-sm">{gazebo.description}</p>
                <p className="text-gray-600 mb-1 text-sm">
                  <span className="font-medium">Kapasitas:</span> {gazebo.capacity} orang
                </p>
                <p className="text-xl font-bold text-green-600 mb-4">
                  {gazebo.price}
                </p>
                <button
                  onClick={() => handleReserveClick(gazebo)}
                  className="mt-auto w-full bg-green-600 text-white py-2.5 px-4 rounded-lg font-medium hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition duration-300 ease-in-out"
                >
                  Reservasi Gazebo Ini
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

export default GazeboPage;
