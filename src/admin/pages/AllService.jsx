import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function AllService({ onAddServiceClick }) {
  const services = [
    {
      id: 1,
      name: "Hair Cut",
      heading: "Premium Hair Styling",
      description:
        "Professional haircut with modern styling and finishing.",
      price: "₹299",
      duration: "30 Min",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200",
    },
    {
      id: 2,
      name: "Beard Styling",
      heading: "Luxury Beard Grooming",
      description:
        "Premium beard trimming, shaping and grooming service.",
      price: "₹199",
      duration: "20 Min",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200",
    },
    {
      id: 3,
      name: "Hair Coloring",
      heading: "Professional Hair Color",
      description:
        "Trendy hair coloring with premium quality products.",
      price: "₹999",
      duration: "90 Min",
      image:
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=1200",
    },
  ];

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Manage Services
        </h1>

        <button
          onClick={onAddServiceClick}
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold"
        >
          + Add Service
        </button>

      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-5 text-left">Image</th>
                <th className="p-5 text-left">Service</th>
                <th className="p-5 text-left">Heading</th>
                <th className="p-5 text-left">Description</th>
                <th className="p-5 text-left">Price</th>
                <th className="p-5 text-left">Duration</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {services.map((service) => (
                <tr
                  key={service.id}
                  className="border-t border-zinc-800 hover:bg-zinc-800/40 transition"
                >

                  {/* Image */}
                  <td className="p-4">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                  </td>

                  {/* Name */}
                  <td className="p-4 font-semibold">
                    {service.name}
                  </td>

                  {/* Heading */}
                  <td className="p-4">
                    {service.heading}
                  </td>

                  {/* Description */}
                  <td className="p-4 max-w-xs text-zinc-400">
                    <p className="line-clamp-2">
                      {service.description}
                    </p>
                  </td>

                  {/* Price */}
                  <td className="p-4 text-red-500 font-bold">
                    {service.price}
                  </td>

                  {/* Duration */}
                  <td className="p-4 text-zinc-400">
                    {service.duration}
                  </td>

                  {/* Actions */}
                  <td className="p-4">

                    <div className="flex justify-center gap-2">

                      <button
                        className="bg-green-600 hover:bg-green-700 p-3 rounded-lg"
                        title="View"
                      >
                        <FaEye />
                      </button>

                      <button
                        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>

                      <button
                        className="bg-red-600 hover:bg-red-700 p-3 rounded-lg"
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

export default AllService;