import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'; // Pastikan path ini benar

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { register } = useContext(AuthContext); // Asumsi ada fungsi register di context Anda
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      alert('Semua field wajib diisi.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Password dan konfirmasi password tidak sama.');
      return;
    }

    // Contoh jika register adalah async
    (async () => {
      try {
        // Pastikan fungsi register di AuthContext Anda mengembalikan boolean atau menangani error
        const success = await register(email, password); 
        if (success) {
          alert('Registrasi berhasil! Silakan login.');
          navigate('/login'); // Arahkan ke login setelah registrasi berhasil
        } else {
          // Pesan error spesifik sebaiknya ditangani oleh fungsi register dan dikembalikan
          alert('Registrasi gagal. Email mungkin sudah digunakan atau terjadi kesalahan lain.');
        }
      } catch (error) {
        console.error("Registration error:", error);
        alert('Terjadi kesalahan saat registrasi.');
      }
    })();
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Kolom Kiri (Dekoratif) - Disesuaikan dengan LoginPage terbaru */}
      <div className="hidden md:flex md:w-3/5 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white p-8 md:p-12 lg:p-16 flex flex-col justify-start"> {/* Mengubah justify-between menjadi justify-start jika hanya ada satu elemen utama */}
        <div>
          <h1 className="text-3xl font-bold">Echo Beach Camp</h1>
          {/* Anda bisa menambahkan logo sebagai SVG atau <img> di sini */}
        </div>
        {/* Tagline dan elemen lain di tengah telah dihapus sesuai LoginPage terbaru */}
      </div>

      {/* Kolom Kanan (Form Registrasi) */}
      <div className="w-full md:w-2/5 flex items-center justify-center bg-white p-8 md:p-12 lg:p-16">
        <div className="max-w-sm w-full">
          <h2 className="text-3xl font-bold mb-8 text-gray-800 text-left">Register</h2>
          
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors"
                placeholder="Masukkan email Anda"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors"
                placeholder="Masukkan password Anda"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                Konfirmasi Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-b border-gray-300 focus:outline-none focus:border-red-500 placeholder-gray-400 transition-colors"
                placeholder="Masukkan konfirmasi password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-150 ease-in-out font-semibold text-sm"
            >
              Register
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Sudah punya akun?{' '}
            <Link to="/login" className="font-medium text-red-600 hover:underline">
              Login di sini
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

export default RegisterPage;