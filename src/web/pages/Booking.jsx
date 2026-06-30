import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaCalendarAlt,
  FaClock,
  FaUser,
  FaPhoneAlt,
  FaCut,
} from "react-icons/fa";

function Booking() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Appointment
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              Book Your Appointment
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

            <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
              Schedule your visit with our professional stylists
              and enjoy premium grooming services.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-10">

            {/* Left Side */}

            <div className="space-y-6">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-red-600 transition">

                <FaCut className="text-red-600 text-3xl mb-4" />

                <h3 className="text-2xl font-bold">
                  Premium Services
                </h3>

                <p className="text-zinc-400 mt-3">
                  Haircut, Beard Styling, Facial,
                  Hair Spa and Grooming.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-red-600 transition">

                <FaCalendarAlt className="text-red-600 text-3xl mb-4" />

                <h3 className="text-2xl font-bold">
                  Easy Scheduling
                </h3>

                <p className="text-zinc-400 mt-3">
                  Choose your preferred date and
                  time slot instantly.
                </p>

              </div>

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 hover:border-red-600 transition">

                <FaClock className="text-red-600 text-3xl mb-4" />

                <h3 className="text-2xl font-bold">
                  Open Daily
                </h3>

                <p className="text-zinc-400 mt-3">
                  Mon - Sun | 9:00 AM - 9:00 PM
                </p>

              </div>

            </div>

            {/* Form */}

            <div className="lg:col-span-2">

              <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 md:p-10 hover:border-red-600 transition">

                <h2 className="text-3xl font-bold mb-8">
                  Appointment Details
                </h2>

                <form className="grid md:grid-cols-2 gap-5">

                  <div className="relative">
                    <FaUser className="absolute left-4 top-5 text-red-500" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full bg-black border border-zinc-700 rounded-xl pl-12 p-4 outline-none focus:border-red-600"
                    />
                  </div>

                  <div className="relative">
                    <FaPhoneAlt className="absolute left-4 top-5 text-red-500" />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full bg-black border border-zinc-700 rounded-xl pl-12 p-4 outline-none focus:border-red-600"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                  />

                  <select
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                  >
                    <option>Select Service</option>
                    <option>Hair Cut</option>
                    <option>Hair Styling</option>
                    <option>Beard Styling</option>
                    <option>Facial</option>
                    <option>Hair Spa</option>
                  </select>

                  <input
                    type="date"
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                  />

                  <input
                    type="time"
                    className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                  />

                  <textarea
                    rows="5"
                    placeholder="Additional Notes"
                    className="md:col-span-2 w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="md:col-span-2 bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold text-lg transition-all duration-300"
                  >
                    Book Appointment
                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Booking;