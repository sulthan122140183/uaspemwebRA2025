import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Pastikan path ini benar

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert('Email dan password wajib diisi.');
      return;
    }
    // Asumsi login() adalah fungsi asynchronous atau mengembalikan boolean secara sinkron
    // Jika login() adalah async:
    // try {
    //   const success = await login(email, password);
    //   if (success) {
    //     navigate('/');
    //   } else {
    //     alert('Email atau password salah.');
    //   }
    // } catch (error) {
    //   console.error("Login error:", error);
    //   alert('Terjadi kesalahan saat login.');
    // }

    // Jika login() adalah sinkron dan mengembalikan boolean:
    const success = login(email, password);
    if (success) {
      navigate('/');
    } else {
      alert('Email atau password salah.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kolom Kiri (Dekoratif) - Warna Biru Elegan */}
      <div className="hidden md:flex md:w-3/5 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold">Echo Beach Camp</h1>
          {/* Anda bisa menambahkan logo sebagai SVG atau <img> di sini */}
        </div>

      </div>

      {/* Kolom Kanan (Form Login) */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-left">Log in</h2>
          
          {/* Form Login */}
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors"
                placeholder="••••••••"
              />
              <div className="text-right mt-2">
                <a
                  href="#forgot-password" // Ganti dengan link yang relevan
                  className="text-xs text-gray-500 hover:underline hover:text-red-600"
                >
                  Forgot password?
                </a>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150 ease-in-out font-semibold text-sm"
            >
              Log in
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-red-600 hover:underline">
              Sign Up
            </Link>
          </p>
          
          <p className="mt-12 text-center text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Echo Beach Camp. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;