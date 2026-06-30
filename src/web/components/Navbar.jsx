import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUser,
  FaSignInAlt,
  FaUserPlus,
  FaSignOutAlt,
} from "react-icons/fa";
import BookingModal from "./BookingModal";
import logo from "../../assets/logo.png";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <nav className="bg-black text-white border-b border-zinc-800 sticky top-0 z-50 overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div>
              <img
                src={logo}
                alt="Logo"
                className="w-15 h-15 md:w-30 md:h-30 object-contain md:relative md:top-8 rounded-full shadow-[0_0_20px_rgba(150,0,11,1)] "
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="hover:text-red-500 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/services"
              className="hover:text-red-500 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/booking"
              className="hover:text-red-500 transition duration-300"
            >
              Book Appointment
            </Link>

            <Link
              to="/gallery"
              className="hover:text-red-500 transition duration-300"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              className="hover:text-red-500 transition duration-300"
            >
              Contact
            </Link>



            <div className="relative">
              <div className="relative group">
                <button
                  className="bg-red-600 border border-red-600 text-white hover:bg-red-700 px-5 py-2 rounded-lg font-medium transition flex items-center gap-2"
                >
                  <FaUser /> Account
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 top-full mt-2 w-52 bg-zinc-900 border  border-zinc-800 rounded-xl overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">

                  <Link
                    to="/login"
                    className="block px-5 py-3 hover:bg-red-600 transition">
                    Login
                  </Link>

                  <Link
                    to="/signup"
                    className="block px-5 py-3 hover:bg-red-600 transition">
                    Sign Up
                  </Link>

                  <Link
                    to="/myprofile"
                    className="block px-5 py-3 hover:bg-red-600 transition">
                    My Profile
                  </Link>

                  <Link
                    to="/myappointments"
                    className="block px-5 py-3 hover:bg-red-600 transition">
                    My Appointments
                  </Link>

                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-3 px-5 py-3 text-left text-red-400 hover:bg-red-600 hover:text-white transition-all duration-300"
                  >
                    <FaSignOutAlt />
                    Logout
                  </button>

                </div>

              </div>

            </div>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-4 py-5">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
            >
              Home
            </Link>

            <Link
              to="/services"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
            >
              Services
            </Link>

            <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
            >
              Appointment Booking
            </Link>

            <Link
              to="/gallery"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
            >
              Gallery
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:text-red-500"
            >
              Contact
            </Link>



            {/* Mobile Account: collapsible */}
            <div className="pt-4">
              <button
                onClick={() => setAccountOpen(!accountOpen)}
                className="w-full flex items-center justify-between px-4 py-2 rounded-lg bg-red-600 border border-red-600 text-white hover:bg-red-700"
              >
                <span className="flex items-center gap-2">
                  <FaUser />
                  Account
                </span>
                <span className="text-sm">{accountOpen ? '▲' : '▼'}</span>
              </button>

              {accountOpen && (
                <div className="mt-2">
                  <div className="bg-zinc-900 rounded-lg px-3 py-2 flex flex-col gap-2">
                    <Link
                      to="/login"
                      onClick={() => { setIsOpen(false); setAccountOpen(false); }}
                      className="px-2 py-2 hover:text-red-500"
                    >
                      Login
                    </Link>

                    <Link
                      to="/signup"
                      onClick={() => { setIsOpen(false); setAccountOpen(false); }}
                      className="px-2 py-2 hover:text-red-500"
                    >
                      Sign Up
                    </Link>

                    <Link
                      to="/myprofile"
                      onClick={() => { setIsOpen(false); setAccountOpen(false); }}
                      className="px-2 py-2 hover:text-red-500"
                    >
                      My Profile
                    </Link>

                    <Link
                      to="/myappointments"
                      onClick={() => { setIsOpen(false); setAccountOpen(false); }}
                      className="px-2 py-2 hover:text-red-500"
                    >
                      My Appointments
                    </Link>

                    <button
                      onClick={() => {
                        handleLogout();
                        setIsOpen(false);
                        setAccountOpen(false);
                      }}
                      className="text-red-400 hover:text-white text-left px-2 py-2"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        )}

        <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
      </div>
    </nav>
  );
}

export default Navbar;