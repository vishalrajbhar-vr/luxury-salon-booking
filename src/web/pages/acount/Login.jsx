import { Link } from "react-router-dom";
import { FaEnvelope, FaLock, FaUserCircle } from "react-icons/fa";

function Login() {
    return (
        <section className="relative min-h-screen flex items-center justify-center px-5 py-20 overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-110"
                style={{
                    backgroundImage:
                        "url('https://static.vecteezy.com/system/resources/previews/067/818/067/non_2x/hand-drawn-seamless-pattern-of-barber-tools-different-scissors-pick-comb-razor-thinner-alligator-hairclip-and-more-vector.jpg')",
                }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/75"></div>

            {/* Red Glow */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>

            <div className="absolute bottom-20 right-10 w-72 h-72 bg-red-600/20 blur-[120px] rounded-full"></div>

            <div className="relative z-10 w-full max-w-md">

                {/* Card */}
                <div className="bg-zinc-900/70 backdrop-blur-xl border border-zinc-700 rounded-3xl p-8 shadow-2xl">

                    {/* Logo */}
                    <div className="text-center mb-8">

                        <div className="w-20 h-20 mx-auto rounded-full bg-red-600 flex items-center justify-center text-4xl">
                            <FaUserCircle />
                        </div>

                        <h1 className="text-4xl font-bold mt-5">
                            Welcome Back
                        </h1>

                        <p className="text-zinc-400 mt-2">
                            Login to your salon account
                        </p>

                    </div>

                    {/* Form */}
                    <form className="space-y-5">

                        <div className="relative">
                            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full bg-black/70  text-white placeholder:text-gray-500 border-zinc-700 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
                            />
                        </div>

                        <div className="relative">
                            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />

                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full bg-black/70 border text-white placeholder:text-gray-500 border-zinc-700 rounded-xl pl-12 pr-4 py-4 outline-none focus:border-red-600"
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm">

                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="accent-red-600"
                                />
                                <span className="text-zinc-400">
                                    Remember Me
                                </span>
                            </label>

                            <Link
                                to="/forgot-password"
                                className="text-red-500 hover:text-red-400"
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 hover:bg-red-700 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02]"
                        >
                            Login
                        </button>

                    </form>

                    <div className="flex items-center gap-3 my-8">
                        <div className="flex-1 h-px bg-zinc-700"></div>
                        <span className="text-zinc-500 text-sm">OR</span>
                        <div className="flex-1 h-px bg-zinc-700"></div>
                    </div>

                    <p className="text-center text-zinc-400">

                        Don't have an account?{" "}

                        <Link
                            to="/signup"
                            className="text-red-500 hover:text-red-400 font-semibold"
                        >
                            Sign Up
                        </Link>

                    </p>

                </div>

            </div>

        </section>
    );
}

export default Login;