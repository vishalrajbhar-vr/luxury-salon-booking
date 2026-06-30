import { FaEye, FaTrash } from "react-icons/fa";

function AllContact() {
  const contacts = [
    {
      id: 1,
      name: "Rahul Kumar",
      email: "rahul@gmail.com",
      phone: "9876543210",
      subject: "Hair Cut",
      message:
        "I want to know the price and timing for premium haircut service.",
    },
    {
      id: 2,
      name: "Amit Singh",
      email: "amit@gmail.com",
      phone: "9876501234",
      subject: "Appointment",
      message:
        "Can I book an appointment for tomorrow evening?",
    },
    {
      id: 3,
      name: "Vishal Rajbhar",
      email: "vishal@gmail.com",
      phone: "9876549876",
      subject: "Hair Color",
      message:
        "Please tell me which hair color package is best.",
    },
    {
      id: 4,
      name: "Rohit Sharma",
      email: "rohit@gmail.com",
      phone: "9123456789",
      subject: "Other",
      message:
        "Need information about salon membership plans.",
    },
  ];

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Contact Messages
        </h1>

        <span className="bg-red-600 px-5 py-2 rounded-xl font-semibold">
          Total : {contacts.length}
        </span>

      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-zinc-800">

              <tr>
                <th className="p-5 text-left">Name</th>
                <th className="p-5 text-left">Email</th>
                <th className="p-5 text-left">Phone</th>
                <th className="p-5 text-left">Subject</th>
                <th className="p-5 text-left">Message</th>
                <th className="p-5 text-center">Action</th>
              </tr>

            </thead>

            <tbody>

              {contacts.map((item) => (

                <tr
                  key={item.id}
                  className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
                >

                  <td className="p-5 font-semibold">
                    {item.name}
                  </td>

                  <td className="p-5">
                    {item.email}
                  </td>

                  <td className="p-5">
                    {item.phone}
                  </td>

                  <td className="p-5">
                    <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-sm">
                      {item.subject}
                    </span>
                  </td>

                  <td className="p-5 max-w-sm text-zinc-400">
                    <p className="line-clamp-2">
                      {item.message}
                    </p>
                  </td>

                  <td className="p-5">

                    <div className="flex justify-center gap-3">

                      <button
                        className="bg-green-600 hover:bg-green-700 p-3 rounded-lg transition"
                        title="View"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="bg-red-600 hover:bg-red-700 p-3 rounded-lg transition"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AllContact;