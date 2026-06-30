import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-20">

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-5">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Contact Us
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              Get In Touch
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto leading-8">
              Have questions or want to book an appointment?
              Contact our team and we'll get back to you as soon as possible.
            </p>

          </div>

          {/* Contact Section */}

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Left Side */}

            <div>

              <h2 className="text-3xl font-bold mb-8">
                Contact Information
              </h2>

              <div className="space-y-6">

                {/* Phone */}

                <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition">

                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Phone Number
                    </h3>

                    <p className="text-zinc-400">
                      +91 9876543210
                    </p>
                  </div>

                </div>

                {/* Email */}

                <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition">

                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Email Address
                    </h3>

                    <p className="text-zinc-400">
                      salon@gmail.com
                    </p>
                  </div>

                </div>

                {/* Location */}

                <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition">

                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Location
                    </h3>

                    <p className="text-zinc-400">
                      Lucknow, Uttar Pradesh
                    </p>
                  </div>

                </div>

                {/* Hours */}

                <div className="flex items-center gap-5 bg-zinc-900 p-6 rounded-2xl border border-zinc-800 hover:border-red-600 transition">

                  <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center text-white text-xl">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">
                      Working Hours
                    </h3>

                    <p className="text-zinc-400">
                      Mon - Sun : 9:00 AM - 9:00 PM
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Side Form */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-red-600 transition">

              <h2 className="text-3xl font-bold mb-8">
                Send Message
              </h2>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                />

                <input
                  type="text"
                  placeholder="Service"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
                />

                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600 resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition-all duration-300"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

          {/* Map Section */}

          <div className="mt-24">

            <div className="text-center mb-10">

              <span className="uppercase tracking-[4px] text-red-500 font-semibold">
                Find Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                Visit Our Salon
              </h2>

              <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

              <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
                Visit our salon and enjoy premium grooming,
                hairstyling and beauty services.
              </p>

            </div>

            {/* Address Bar */}

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-8 flex flex-col md:flex-row justify-between items-center gap-5">

              <div>

                <h3 className="text-2xl font-bold">
                  Luxury Salon & Spa
                </h3>

                <p className="text-zinc-400 mt-2">
                  Lucknow, Uttar Pradesh, India
                </p>

              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold transition"
              >
                Get Directions
              </a>

            </div>

            {/* Google Map */}

            <div className="overflow-hidden rounded-3xl border border-zinc-800 hover:border-red-600 transition-all duration-500 shadow-2xl">

              <iframe
                title="Salon Location"
                src="https://www.google.com/maps?q=Lucknow,Uttar%20Pradesh&output=embed"
                className="w-full h-[300px] md:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;