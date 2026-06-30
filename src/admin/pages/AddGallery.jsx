import { useState } from "react";
import { FaImage, FaUpload } from "react-icons/fa";

function AddGallery() {
  const [preview, setPreview] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div>

      <h1 className="text-4xl font-bold mb-8">
        Add Gallery Image
      </h1>

      <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 max-w-3xl">

        <form className="space-y-6">

          <div>
            <label className="block mb-2 text-zinc-300">
              Image Title
            </label>

            <input
              type="text"
              placeholder="Enter image title"
              className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="block mb-2 text-zinc-300">
              Category
            </label>

            <select className="w-full bg-black border border-zinc-700 rounded-xl p-4 outline-none focus:border-red-600">
              <option>Hair Cut</option>
              <option>Beard Style</option>
              <option>Hair Color</option>
              <option>Kids Style</option>
            </select>
          </div>

          <div>

            <label className="block mb-3 text-zinc-300">
              Upload Image
            </label>

            <label className="border-2 border-dashed border-zinc-700 rounded-2xl h-64 flex flex-col justify-center items-center cursor-pointer hover:border-red-600 transition">

              <FaUpload className="text-5xl text-red-500 mb-4" />

              <span className="text-zinc-400">
                Click To Upload Image
              </span>

              <input
                type="file"
                hidden
                onChange={handleImage}
              />

            </label>

          </div>

          {preview && (
            <div>

              <h3 className="mb-3 font-semibold">
                Preview
              </h3>

              <img
                src={preview}
                alt="preview"
                className="w-full h-72 object-cover rounded-2xl"
              />

            </div>
          )}

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition"
          >
            Add Image
          </button>

        </form>

      </div>

    </div>
  );
}

export default AddGallery;