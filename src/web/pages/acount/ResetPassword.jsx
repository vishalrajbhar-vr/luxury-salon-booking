import { Link } from "react-router-dom";
import { FaLock, FaUserCircle } from "react-icons/fa";

function ResetPassword() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden">

      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/067/818/067/non_2x/hand-drawn-seamless-pattern-of-barber-tools-different-scissors-pick-comb-razor-thinner-alligator-hairclip-and-more-vector.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 w-full max-w-md">

        <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8">

          <div className="text-center mb-8">

            <div className="w-20 h-20 mx-auto rounded-full bg-red-600 flex items-center justify-center text-4xl">
              <FaUserCircle />
            </div>

            <h1 className="text-4xl font-bold text-white mt-5">
              Reset Password
            </h1>

            <p className="text-zinc-400 mt-2">
              Create a new password
            </p>

          </div>

          <form className="space-y-5">

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-black/70 text-white border border-zinc-700 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
              />

            </div>

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-black/70 text-white border border-zinc-700 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
              />

            </div>

            <Link
              to="/login"
              className="block w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl text-center font-semibold text-white"
            >
              Update Password
            </Link>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ResetPassword;