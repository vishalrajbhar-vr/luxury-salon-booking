import {
  FaUser,
  FaPhoneAlt,
  FaCalendarAlt,
  FaClock,
  FaCut,
} from "react-icons/fa";

function BookingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950 shadow-2xl overflow-hidden">
        <div className="flex items-center justify-between border-b border-zinc-800 px-6 py-5">

          <div>
            <p className="text-sm uppercase tracking-[4px] text-red-500 font-semibold">
              Quick Booking
            </p>
            <h2 className="text-3xl font-bold text-white mt-2">
              Book Your Appointment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-3xl text-zinc-400 hover:text-white"
            aria-label="Close booking form"
          >
            &times;
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 p-6">
          <div className="space-y-5">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <FaCut className="text-red-600 text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-white">Premium Services</h3>
              <p className="text-zinc-400 mt-3">
                Haircut, Beard Styling, Facial, Hair Spa and Grooming.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <FaCalendarAlt className="text-red-600 text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-white">Easy Scheduling</h3>
              <p className="text-zinc-400 mt-3">
                Choose your preferred date and time instantly.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-5">
              <FaClock className="text-red-600 text-3xl mb-4" />
              <h3 className="text-2xl font-bold text-white">Open Daily</h3>
              <p className="text-zinc-400 mt-3">Mon - Sun | 9:00 AM - 9:00 PM</p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                onClose();
              }}
              className="space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <FaUser className="absolute left-4 top-5 text-red-500" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-black border border-zinc-700 rounded-xl pl-12 p-4 text-white outline-none focus:border-red-600"
                    required
                  />
                </div>

                <div className="relative">
                  <FaPhoneAlt className="absolute left-4 top-5 text-red-500" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-black border border-zinc-700 rounded-xl pl-12 p-4 text-white outline-none focus:border-red-600"
                    required
                  />
                </div>
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-red-600"
                required
              />

              <select
                className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-red-600"
                required
              >
                <option value="">Select Service</option>
                <option>Hair Cut</option>
                <option>Hair Styling</option>
                <option>Beard Styling</option>
                <option>Facial</option>
                <option>Hair Spa</option>
              </select>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="date"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-red-600"
                  required
                />
                <input
                  type="time"
                  className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-red-600"
                  required
                />
              </div>

              <textarea
                rows="4"
                placeholder="Additional Notes"
                className="w-full bg-black border border-zinc-700 rounded-xl p-4 text-white outline-none focus:border-red-600 resize-none"
              ></textarea>

              <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-xl border border-zinc-700 px-6 py-3 text-white hover:border-red-600 hover:text-red-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-red-600 px-6 py-3 text-white hover:bg-red-700 transition"
                >
                  Book Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingModal;
