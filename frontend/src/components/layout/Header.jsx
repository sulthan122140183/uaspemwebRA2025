import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  // Style untuk link navigasi aktif (opsional)
  const activeClassName = "text-blue-300 font-semibold";

  return (
    // Header dengan background semi-transparan, fixed di atas
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20"> {/* Sesuaikan tinggi jika perlu */}
          {/* Judul/Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-xl md:text-2xl font-bold text-white hover:text-yellow-300 transition-colors">
              Echo Beach Camp
            </Link>
          </div>

          {/* Navigasi & Tombol */}
          <nav className="flex items-center space-x-3 md:space-x-6">
             {/* Navigasi - bisa pakai array map jika link banyak */}
            <div className="hidden sm:flex items-center space-x-1 md:space-x-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/rooms-description"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                }
              >
                Rooms
              </NavLink>
              <NavLink
                to="/facilities-description"
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                }
              >
                Facilities
              </NavLink>
              {user && (
                <>
                  <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                      `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                    }
                  >
                    Profile
                  </NavLink>
                  {user.email === 'admin@example.com' && (
                    <>
                      <NavLink
                        to="/admin-cms"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                        }
                      >
                        Admin CMS
                      </NavLink>
                      <NavLink
                        to="/admin-dashboard"
                        className={({ isActive }) =>
                          `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                        }
                      >
                        Admin Dashboard
                      </NavLink>
                    </>
                  )}
                </>
              )}
            </div>

              
            {/* Auth Buttons */}
            <div className="ml-4">
              {user ? (
                <button
                  onClick={logout}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-1 px-3 rounded"
                >
                  Logout
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium hover:text-yellow-300 transition-colors ${isActive ? 'text-yellow-400 font-semibold' : 'text-gray-300'}`
                  }
                >
                  Login / Register
                </NavLink>
              )}
            </div>

            {/* Tombol Book Now */}
            <Link
              to="/booking-kamar" // Arahkan ke halaman booking utama
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded transition-colors duration-200 text-sm whitespace-nowrap" // whitespace-nowrap agar teks tidak wrap
            >
              BOOK NOW
            </Link>


             {/* Tombol Menu Mobile (untuk nanti) */}
             {/* <div className="sm:hidden"> ... </div> */}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
