import { useState } from "react";

function MyAppointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      name: "Vishal Rajbhar",
      phone_no: "9876543210",
      email: "vishal@gmail.com",
      service: "Hair Cut",
      date: "28 June 2026",
      time: "11:00 AM",
      description: "Normal Hair Cut",
      status: "Confirmed",
    },
    {
      id: 2,
      name: "Vishal Rajbhar",
      phone_no: "9876543210",
      email: "vishal@gmail.com",
      service: "Hair Spa",
      date: "05 July 2026",
      time: "02:00 PM",
      description: "Hair Spa with Massage",
      status: "Pending",
    },
    {
      id: 3,
      name: "Vishal Rajbhar",
      phone_no: "9876543210",
      email: "vishal@gmail.com",
      service: "Facial",
      date: "12 July 2026",
      time: "05:00 PM",
      description: "Gold Facial",
      status: "Cancelled",
    },
  ]);

  const handleCancel = (id) => {
    const updatedAppointments = appointments.map((item) =>
      item.id === id
        ? { ...item, status: "Cancelled" }
        : item
    );

    setAppointments(updatedAppointments);
  };

  return (
    <section className="min-h-screen bg-black text-white py-10 px-5">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold">
              My Appointments
            </h1>

            <p className="text-gray-400 mt-2">
              View and manage your salon bookings.
            </p>
          </div>

          <div className="bg-red-600 px-5 py-3 rounded-xl font-semibold">
            Total Appointments : {appointments.length}
          </div>
        </div>

        {/* Appointment List */}
        <div className="space-y-6">
          {appointments.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-red-500 hover:shadow-lg transition"
            >
              {/* Top */}
              <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">

                <h2 className="text-2xl font-bold text-red-500">
                  {item.service}
                </h2>

                <span
                  className={`px-4 py-2 rounded-full text-sm font-semibold ${
                    item.status === "Confirmed"
                      ? "bg-green-600"
                      : item.status === "Pending"
                      ? "bg-yellow-500 text-black"
                      : "bg-red-600"
                  }`}
                >
                  {item.status}
                </span>

              </div>

              {/* Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Name</p>
                  <p>{item.name}</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Phone Number</p>
                  <p>{item.phone_no}</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Email</p>
                  <p>{item.email}</p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4">
                  <p className="text-gray-400 text-sm">Appointment</p>
                  <p>
                    {item.date} • {item.time}
                  </p>
                </div>

                <div className="bg-zinc-800 rounded-xl p-4 md:col-span-2">
                  <p className="text-gray-400 text-sm">Description</p>
                  <p>{item.description}</p>
                </div>

              </div>

              {/* Cancel Button */}
              <div className="flex justify-end mt-6">
                {item.status === "Confirmed" && (
                  <button
                    onClick={() => handleCancel(item.id)}
                    className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition"
                  >
                    Cancel Appointment
                  </button>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MyAppointments;