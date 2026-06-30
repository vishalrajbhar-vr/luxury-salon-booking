import { useState } from "react";
import { FaEye, FaTrash } from "react-icons/fa";

function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      name: "Rahul Kumar",
      phone_no: "9876543210",
      email: "rahul@gmail.com",
      service: "Hair Cut",
      date: "12 Jun 2026",
      time: "10:00 AM",
      description: "Normal Hair Cut",
      status: "Pending",
    },
    {
      name: "Aman Singh",
      phone_no: "9876501234",
      email: "aman@gmail.com",
      service: "Facial",
      date: "13 Jun 2026",
      time: "02:30 PM",
      description: "Gold Facial",
      status: "Confirm",
    },
  ]);

  const handleView = (appointment) => {
    console.log("View:", appointment);
  };

  const handleDelete = (appointment) => {
    console.log("Delete:", appointment);
  };

  const handleStatusChange = (index, value) => {
    const updatedAppointments = [...appointments];
    updatedAppointments[index].status = value;
    setAppointments(updatedAppointments);
  };

  return (
    <div className="bg-black min-h-screen text-white p-8">
      {/* Heading */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Booking Appointments
        </h1>

        <span className="bg-red-600 px-5 py-2 rounded-lg font-semibold">
          Total : {appointments.length}
        </span>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-zinc-700 shadow-lg">
        <table className="w-full text-sm">
          <thead className="bg-red-600 text-white">
            <tr>
              <th className="px-4 py-3 text-left">Name</th>
              <th className="px-4 py-3 text-left">Phone</th>
              <th className="px-4 py-3 text-left">Email</th>
              <th className="px-4 py-3 text-left">Service</th>
              <th className="px-4 py-3 text-left">Date</th>
              <th className="px-4 py-3 text-left">Time</th>
              <th className="px-4 py-3 text-left">Description</th>
              <th className="px-4 py-3 text-center">Status</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {appointments.map((item, index) => (
              <tr
                key={index}
                className="border-b border-zinc-700 hover:bg-zinc-900 transition duration-200"
              >
                <td className="px-4 py-4">{item.name}</td>
                <td className="px-4 py-4">{item.phone_no}</td>
                <td className="px-4 py-4">{item.email}</td>
                <td className="px-4 py-4">{item.service}</td>
                <td className="px-4 py-4">{item.date}</td>
                <td className="px-4 py-4">{item.time}</td>
                <td className="px-4 py-4">{item.description}</td>

                {/* Status Dropdown */}
                <td className="px-4 py-4 text-center">
                  <select
                    value={item.status}
                    onChange={(e) =>
                      handleStatusChange(index, e.target.value)
                    }
                    className={`px-3 py-2 rounded-lg text-white font-medium outline-none cursor-pointer ${
                      item.status === "Pending"
                        ? "bg-yellow-500"
                        : item.status === "Confirm"
                        ? "bg-green-600"
                        : "bg-red-600"
                    }`}
                  >
                    <option value="Pending" className="text-black">
                      Pending
                    </option>
                    <option value="Confirm" className="text-black">
                      Confirm
                    </option>
                    <option value="Cancel" className="text-black">
                      Cancel
                    </option>
                  </select>
                </td>

                {/* Action Buttons */}
                <td className="px-4 py-4">
                  <div className="flex justify-center items-center gap-3">
                    <button
                      onClick={() => handleView(item)}
                      className="bg-blue-600 hover:bg-blue-700 p-2 rounded-lg transition"
                    >
                      <FaEye size={16} />
                    </button>

                    <button
                      onClick={() => handleDelete(item)}
                      className="bg-red-600 hover:bg-red-700 p-2 rounded-lg transition"
                    >
                      <FaTrash size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Appointments;