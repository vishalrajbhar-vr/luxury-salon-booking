import { FaLock } from "react-icons/fa";

function ChangePassword() {
  return (
    <section className="min-h-screen bg-black text-white flex justify-center items-center px-5">

      <div className="w-full max-w-lg">

        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

          <h1 className="text-4xl font-bold text-center mb-8">
            Change Password
          </h1>

          <form className="space-y-5">

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="Current Password"
                className="w-full bg-black border border-zinc-700 rounded-xl pl-12 py-4 outline-none focus:border-red-600"
              />

            </div>

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="New Password"
                className="w-full bg-black border border-zinc-700 rounded-xl pl-12 py-4 outline-none focus:border-red-600"
              />

            </div>

            <div className="relative">

              <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

              <input
                type="password"
                placeholder="Confirm New Password"
                className="w-full bg-black border border-zinc-700 rounded-xl pl-12 py-4 outline-none focus:border-red-600"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold"
            >
              Update Password
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default ChangePassword;