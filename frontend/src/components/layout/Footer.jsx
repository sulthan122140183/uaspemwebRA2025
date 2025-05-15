import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // Footer sederhana di bagian bawah
    <footer className="bg-gray-900 text-gray-300 py-8 mt-auto border-t border-gray-700">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-3">Tentang Kami</h3>
            <p className="text-sm text-gray-400">
              Resort pantai eksklusif dengan pemandangan indah dan fasilitas lengkap.
            </p>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white mb-3">Kontak</h3>
            <p className="text-sm text-gray-400">+62 812-7076-8754</p>
            <p className="text-sm text-gray-400">sulthan.122140183@gmail.com</p>
          </div>
          
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold text-white mb-3">Sosial Media</h3>
            <div className="flex justify-center md:justify-end space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100045496166236" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/echobeachcamp_" className="text-gray-400 hover:text-white transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            &copy; {currentYear} Echo Beach Camp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;