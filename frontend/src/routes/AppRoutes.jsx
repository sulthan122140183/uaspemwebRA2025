import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage'; 
import GazeboPage from '../pages/GazeboPage';  
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';
import AdminCMSPage from '../pages/AdminCMSPage';
import AdminDashboard from '../pages/AdminDashboard';
import RoomDescriptionPage from '../pages/RoomDescriptionPage';
import FacilitiesDescriptionPage from '../pages/FacilitiesDescriptionPage';
import { AuthContext } from '../contexts/AuthContext';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const AppRoutes = () => {
  const { user } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/booking-kamar"
        element={
          <PrivateRoute>
            <BookingPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/reservasi-gazebo"
        element={
          <PrivateRoute>
            <GazeboPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin-cms"
        element={
          <PrivateRoute>
            <AdminCMSPage />
          </PrivateRoute>
        }
      />
      <Route
        path="/admin-dashboard"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      <Route path="/rooms-description" element={<RoomDescriptionPage />} />
      <Route path="/facilities-description" element={<FacilitiesDescriptionPage />} />
      <Route
        path="/login"
        element={user ? <Navigate to="/" /> : <LoginPage />}
      />
      <Route
        path="/register"
        element={user ? <Navigate to="/" /> : <RegisterPage />}
      />
    </Routes>
  );
};

export default AppRoutes;
