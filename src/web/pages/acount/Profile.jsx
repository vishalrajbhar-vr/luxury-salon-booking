import {
  FaUserCircle,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

function Profile() {
  return (
    <section className="min-h-screen bg-black text-white p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* Profile Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-center">

            <FaUserCircle className="text-8xl text-red-600 mx-auto" />

            <h2 className="text-2xl font-bold mt-5">
              Vishal Kumar
            </h2>

            <p className="text-zinc-400">
              Premium Member
            </p>

          </div>

          {/* Details */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-8">
              Personal Information
            </h2>

            <div className="space-y-6">

              <div className="flex items-center gap-4">
                <FaUserCircle className="text-red-500 text-xl" />

                <div>
                  <p className="text-zinc-400">
                    Full Name
                  </p>

                  <h3>
                    Vishal Kumar
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-red-500 text-xl" />

                <div>
                  <p className="text-zinc-400">
                    Email
                  </p>

                  <h3>
                    vishal@gmail.com
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FaPhone className="text-red-500 text-xl" />

                <div>
                  <p className="text-zinc-400">
                    Phone
                  </p>

                  <h3>
                    +91 9876543210
                  </h3>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Profile;