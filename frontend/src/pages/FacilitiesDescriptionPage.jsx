import React from 'react';
import { Link } from 'react-router-dom';

const FacilitiesDescriptionPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-lg overflow-hidden shadow-2xl">
        <img
          src="/gazebo3.jpg"
          alt="Gazebo VIP"
          className="w-full h-96 object-cover transform transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70 flex items-center justify-center">
          <h1 className="text-white text-5xl md:text-7xl font-serif font-extrabold drop-shadow-lg">
            Gazebo VIP
          </h1>
        </div>
      </div>

      {/* Description and Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Exclusive Comfort and Style</h2>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Our Gazebo VIP offers an exclusive and luxurious experience with premium amenities and a private setting. Perfect for relaxation or special occasions, it provides a serene escape with stunning views.
          </p>
          <p className="text-gray-700 mb-8 leading-relaxed text-lg">
            Enjoy comfortable seating, ambient lighting, and personalized service to make your stay truly memorable.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-3 text-lg">
            <li>Private gazebo with elegant furnishings</li>
            <li>Ambient lighting and sound system</li>
            <li>Complimentary refreshments and snacks</li>
            <li>Personalized service and concierge</li>
            <li>Access to exclusive pool area</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-4xl font-semibold mb-6 text-gray-900">Pricing & Booking</h2>
          <p className="text-gray-700 mb-8 text-xl">
            Starting from <span className="font-bold text-2xl">Rp 1.500.000</span> per day.
          </p>
          <Link
            to="/reservasi-gazebo?item=GazeboVIP"
            className="bg-blue-700 text-white px-8 py-4 rounded-md font-semibold hover:bg-blue-800 transition shadow-lg text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesDescriptionPage;
