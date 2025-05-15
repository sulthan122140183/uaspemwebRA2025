import React from 'react';
import { Link } from 'react-router-dom';

const RoomDescriptionPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-lg overflow-hidden shadow-2xl">
        <img
          src="/kamar3.jpg"
          alt="Grand Luxury Room"
          className="w-full h-96 object-cover transform transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-extrabold drop-shadow-lg">
            Grand Luxury Room
          </h1>
        </div>
      </div>

      {/* Description and Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Experience Elegance and Comfort</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Our Grand Luxury Room offers a perfect blend of classic elegance and modern amenities. Enjoy spacious interiors, premium furnishings, and breathtaking views that create an unforgettable stay.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            The room features a king-sized bed, a luxurious bathroom with a rain shower, and a cozy seating area. Whether you are here for business or leisure, this room provides the ultimate comfort and style.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>King-sized bed with premium linens</li>
            <li>High-speed Wi-Fi and smart TV</li>
            <li>Spacious bathroom with rain shower and bathtub</li>
            <li>Minibar and coffee maker</li>
            <li>24-hour room service</li>
            <li>Complimentary breakfast</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Pricing & Booking</h2>
          <p className="text-gray-700 mb-8 text-xl">
            Starting from <span className="font-bold text-2xl">Rp 1.000.000</span> per night.
          </p>
          <Link
            to="/booking-kamar?item=GrandLuxuryRoom"
            className="bg-blue-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition shadow-lg text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomDescriptionPage;
