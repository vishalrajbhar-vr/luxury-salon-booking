import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/85"></div>

      <div className="relative z-10">

        {/* Newsletter */}
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            <h2 className="text-5xl font-bold">
              Lux<span className="text-red-500">Salon.</span>
            </h2>

            <div>
              <h3 className="text-2xl font-semibold">
                Subscribe Newsletter
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-5 py-4 w-full sm:w-[350px] bg-white text-black outline-none"
              />

              <button className="bg-red-600 hover:bg-red-700 px-8 py-4 font-semibold transition">
                Send
              </button>
            </div>

          </div>

          <div className="border-t border-zinc-700 mt-10"></div>

        </div>

        {/* Footer Content */}

        <div className="max-w-7xl mx-auto px-6 py-12">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Contact */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Contact Us
              </h3>

              <div className="space-y-5 text-zinc-300">

                <div className="flex gap-3">
                  <FaLocationDot className="text-red-500 mt-1" />
                  <p>
                    Lucknow, Uttar Pradesh,
                    India
                  </p>
                </div>

                <div className="flex gap-3">
                  <FaEnvelope className="text-red-500 mt-1" />
                  <p>salon@gmail.com</p>
                </div>

                <div className="flex gap-3">
                  <FaPhone className="text-red-500 mt-1" />
                  <p>+91 9876543210</p>
                </div>

              </div>

            </div>

            {/* Services */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Best Services
              </h3>

              <ul className="space-y-4 text-zinc-300">

                <li className="hover:text-red-500 cursor-pointer">
                  Hair Cutting
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Hair Styling
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Beard Styling
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Facial
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Hair Colouring
                </li>

              </ul>

            </div>

            {/* Products */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Our Products
              </h3>

              <ul className="space-y-4 text-zinc-300">

                <li className="hover:text-red-500 cursor-pointer">
                  Shampoo
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Conditioner
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Hair Treatment
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Styling Products
                </li>

                <li className="hover:text-red-500 cursor-pointer">
                  Brushes & Combs
                </li>

              </ul>

            </div>

            {/* Recent Posts */}
            <div>

              <h3 className="text-2xl font-bold mb-6">
                Recent Posts
              </h3>

              <div className="space-y-5">

                <div className="flex gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=200"
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <p className="text-red-500 text-xs">
                      APRIL 8, 2026
                    </p>

                    <h4 className="text-sm">
                      Modern Haircut Trends
                    </h4>
                  </div>

                </div>

                <div className="flex gap-4">

                  <img
                    src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=200"
                    alt=""
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div>
                    <p className="text-red-500 text-xs">
                      APRIL 5, 2026
                    </p>

                    <h4 className="text-sm">
                      Men's Fade Haircut Guide
                    </h4>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom Footer */}

        <div className="border-t border-zinc-800">

          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

            <p className="text-zinc-400">
              © 2026 Luxury Salon. All Rights Reserved.
            </p>

            <div className="flex gap-4">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-zinc-800 hover:bg-red-600 flex items-center justify-center transition"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;