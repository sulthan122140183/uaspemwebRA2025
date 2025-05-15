import React from 'react';
import { Link } from 'react-router-dom';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const mockSummary = {
  totalBookings: 120,
  upcomingBookings: 15,
  completedBookings: 100,
  cancelledBookings: 5,
};

const mockRecentBookings = [
  { id: 'b101', itemName: 'Kamar King', guestName: 'John Doe', date: '2023-09-01', status: 'Upcoming' },
  { id: 'b102', itemName: 'Gazebo VIP', guestName: 'Jane Smith', date: '2023-08-28', status: 'Completed' },
  { id: 'b103', itemName: 'Kamar Double', guestName: 'Alice Johnson', date: '2023-08-25', status: 'Cancelled' },
];

const weeklyBookingData = [
  { week: 'Week 1', bookings: 10 },
  { week: 'Week 2', bookings: 15 },
  { week: 'Week 3', bookings: 8 },
  { week: 'Week 4', bookings: 20 },
];

const statusColors = {
  Completed: 'bg-green-100 text-green-800',
  Upcoming: 'bg-yellow-100 text-yellow-800',
  Cancelled: 'bg-red-100 text-red-800',
};

const AdminDashboard = () => {
  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <h1 className="text-5xl font-extrabold mb-10 text-gray-900">Admin Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Total Bookings</h2>
          <p className="text-4xl font-bold text-blue-600">{mockSummary.totalBookings}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Upcoming Bookings</h2>
          <p className="text-4xl font-bold text-yellow-500">{mockSummary.upcomingBookings}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Completed Bookings</h2>
          <p className="text-4xl font-bold text-green-600">{mockSummary.completedBookings}</p>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Cancelled Bookings</h2>
          <p className="text-4xl font-bold text-red-600">{mockSummary.cancelledBookings}</p>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Weekly Bookings</h2>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={weeklyBookingData}
              margin={{
                top: 20, right: 30, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="bookings" stroke="#3b82f6" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-gray-900">Recent Bookings</h2>
        <div className="overflow-x-auto rounded-lg shadow-lg border border-gray-200">
          <table className="min-w-full bg-white rounded-lg">
            <thead>
              <tr className="bg-gray-100 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-4 px-6 text-left">Booking ID</th>
                <th className="py-4 px-6 text-left">Item</th>
                <th className="py-4 px-6 text-left">Guest</th>
                <th className="py-4 px-6 text-left">Date</th>
                <th className="py-4 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {mockRecentBookings.map((booking) => (
                <tr key={booking.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-4 px-6 text-left whitespace-nowrap">{booking.id}</td>
                  <td className="py-4 px-6 text-left">{booking.itemName}</td>
                  <td className="py-4 px-6 text-left">{booking.guestName}</td>
                  <td className="py-4 px-6 text-left">{booking.date}</td>
                  <td className="py-4 px-6 text-left">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColors[booking.status]}`}>
                      {booking.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6 text-gray-900">Admin Actions</h2>
        <div className="space-x-4">
          <Link
            to="/admin-cms"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
          >
            Manage CMS Content
          </Link>
          {/* Add more admin action links here */}
        </div>
      </section>
    </div>
  );
};

export default AdminDashboard;
