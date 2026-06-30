import {
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

function AllGallery({onAddGalleryClick}) {
  const galleryImages = [
    {
      id: 1,
      title: "Modern Fade",
      category: "Hair Cut",
      description: "Latest fade hairstyle collection.",
      image:
        "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=1200",
    },
    {
      id: 2,
      title: "Premium Beard",
      category: "Beard Style",
      description: "Luxury beard styling and grooming.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200",
    },
    {
      id: 3,
      title: "French Crop",
      category: "Hair Cut",
      description: "Modern french crop hairstyle.",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200",
    },
    {
      id: 4,
      title: "Kids Haircut",
      category: "Kids Style",
      description: "Stylish haircut collection for kids.",
      image:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=1200",
    },
  ];

  return (
    <div>

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          Gallery Management
        </h1>

        <button 
        onClick={onAddGalleryClick}
        className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl font-semibold">
          + Add Gallery
        </button>

      </div>

      {/* Table */}
      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-red-600 text-white">
              <tr>
                <th className="p-5 text-left">Image</th>
                <th className="p-5 text-left">Title</th>
                <th className="p-5 text-left">Category</th>
                <th className="p-5 text-left">Description</th>
                <th className="p-5 text-center">Actions</th>
              </tr>
            </thead>

            <tbody>

              {galleryImages.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-zinc-800 hover:bg-zinc-800/50 transition"
                >

                  <td className="p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-24 h-20 rounded-xl object-cover"
                    />
                  </td>

                  <td className="p-4 font-semibold">
                    {item.title}
                  </td>

                  <td className="p-4">
                    <span className="bg-red-600/20 text-red-500 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                  </td>

                  <td className="p-4 text-zinc-400 max-w-sm">
                    <p className="line-clamp-2">
                      {item.description}
                    </p>
                  </td>

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

export default AllGallery;