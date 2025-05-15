import React from 'react';
import { Link } from 'react-router-dom';

// Definisikan path gambar dan rute sebagai konstanta untuk kemudahan pengelolaan
const BACKGROUND_IMAGE_URL = '/gambar1.jpg';
const GALLERY_IMAGE_1_URL = '/gambar2.jpg';
const GALLERY_IMAGE_2_URL = '/gambar3.jpg';
const GALLERY_IMAGE_3_URL = '/gambar4.jpg';

const BOOKING_KAMAR_ROUTE = '/booking-kamar';
const RESERVASI_GAZEBO_ROUTE = '/reservasi-gazebo'; // Atau mungkin '/fasilitas'? Sesuaikan jika perlu

const HomePage = () => {
  return (
    <section
      className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${BACKGROUND_IMAGE_URL})` }}
      aria-label="Hero Section Echo Beach Resort" // Tambahkan aria-label untuk aksesibilitas
    >
      {/* Overlay Gradient untuk meningkatkan kontras teks */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/30"
        aria-hidden="true" // Sembunyikan dari screen reader karena ini murni dekoratif
      />

      {/* Konten Utama */}
      <div className="relative z-10 text-center text-white px-4 w-full max-w-6xl mx-auto">
        {/* Kontainer untuk konten hero */}
        <div className="flex flex-col items-center justify-center min-h-[80vh]">
          <p className="text-sm md:text-base font-light uppercase tracking-widest mb-2 md:mb-4 animate-fade-in">
            Echo Beach Resort
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight animate-fade-in-up">
            {/* Gunakan span atau fragment untuk grouping jika perlu, tapi block sudah cukup */}
            <span className="block">Luxury Beachfront</span>
            <span className="block">Cottages & Gazebos</span>
          </h1>

          <p className="text-base md:text-lg lg:text-xl max-w-md md:max-w-2xl mx-auto mb-8 md:mb-12 px-4 animate-fade-in-up delay-100">
            Nikmati pengalaman menginap eksklusif dengan pemandangan pantai langsung dari kamar Anda.
          </p>

          {/* Tombol Aksi */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <Link
              to={BOOKING_KAMAR_ROUTE}
              className="inline-block bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/30"
            >
              BOOK NOW
            </Link>
            <Link
              to={RESERVASI_GAZEBO_ROUTE} // Menggunakan konstanta rute
              className="inline-block bg-transparent border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              {/* Pertimbangkan teks yang lebih deskriptif jika 'VIEW FACILITIES' mengarah ke reservasi gazebo */}
              VIEW FACILITIES 
              {/* Alternatif: RESERVE GAZEBO */}
            </Link>
          </div>
        </div>

        {/* Preview Galeri */}
        {/* Tambahkan judul opsional untuk bagian galeri */}
        {/* <h2 className="text-2xl font-semibold mb-6 mt-16">Gallery Preview</h2> */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 mb-8 px-4">
          {/* Item Galeri 1 */}
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <img
              src={GALLERY_IMAGE_1_URL}
              // Alt text yang lebih deskriptif
              alt="Pemandangan pantai indah dari Echo Beach Resort"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500" // Gunakan group-hover untuk efek pada parent hover
              loading="lazy" // Tambahkan lazy loading untuk performa
            />
          </div>

          {/* Item Galeri 2 */}
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
            <img
              src={GALLERY_IMAGE_2_URL}
              // Alt text yang lebih deskriptif
              alt="Interior kamar cottage mewah di Echo Beach Resort dengan pemandangan pantai"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>

          {/* Item Galeri 3 (Hanya tampil di layar medium ke atas) */}
          <div className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hidden md:block group">
            <img
              src={GALLERY_IMAGE_3_URL}
              // Alt text yang lebih deskriptif
              alt="Suasana matahari terbenam yang menakjubkan di atas laut dari Echo Beach Resort"
              className="w-full h-48 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;