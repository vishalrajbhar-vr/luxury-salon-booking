import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSearchPlus } from "react-icons/fa";

function Gallery() {
  const trendingStyles = [
    {
      title: "Modern Fade",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200",
    },
    {
      title: "French Crop",
      image:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200",
    },
    {
      title: "Textured Quiff",
      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200",
    },
    {
      title: "Pompadour",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200",
    },
  ];

  const galleryImages = [
    {
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200",
      title: "Modern Fade",
      height: "h-[500px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1200",
      title: "French Crop",
      height: "h-[650px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1200",
      title: "Pompadour Style",
      height: "h-[450px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200",
      title: "Kids Haircut",
      height: "h-[600px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200",
      title: "Hair Styling",
      height: "h-[500px]",
    },
    {
      image:
        "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1200",
      title: "Premium Beard",
      height: "h-[650px]",
    },
  ];

  const categories = [
    "Kids Haircut",
    "Teen Fade",
    "Modern Fade",
    "French Crop",
    "Pompadour",
    "Textured Quiff",
    "Undercut",
    "Beard Styling",
  ];

  return (
    <>
      <Navbar />

      <section className="bg-black text-white overflow-hidden">

        {/* Hero Banner */}
        <div
          className="relative min-h-[85vh] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=2000')",
          }}
        >
          <div className="absolute inset-0 bg-black/75"></div>

          <div className="relative z-10 text-center px-5">
            <span className="uppercase tracking-[5px] text-red-500 font-semibold">
              Premium Salon Gallery
            </span>

            <h1 className="text-5xl md:text-7xl font-black mt-5">
              Modern Hair
              <span className="text-red-600"> Styles</span>
            </h1>

            <p className="text-zinc-300 max-w-3xl mx-auto mt-6 text-lg">
              Explore trending hairstyles, beard styling,
              grooming transformations and luxury salon looks.
            </p>
          </div>
        </div>

        {/* Trending Hairstyles */}
        <div className="max-w-7xl mx-auto px-5 py-24">

          <div className="text-center mb-16">
            <span className="text-red-500 uppercase tracking-[4px]">
              Trending Hairstyles
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Choose Your Next Look
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {trendingStyles.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[420px] object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                <h3 className="absolute bottom-5 left-5 text-2xl font-bold">
                  {item.title}
                </h3>
              </div>
            ))}

          </div>

        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-5 pb-24">

          <div className="text-center mb-16">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Our Collection
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Premium Hair Gallery
            </h2>

          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">

            {galleryImages.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 break-inside-avoid"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full ${item.height} object-cover group-hover:scale-110 transition duration-700`}
                />

                <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center">

                  <FaSearchPlus className="text-red-500 text-4xl mb-4" />

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-zinc-300 mt-2">
                    Premium Salon Collection
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* Categories */}
        <div className="max-w-7xl mx-auto px-5 pb-24">

          <div className="text-center mb-12">

            <h2 className="text-4xl font-bold">
              Popular Categories
            </h2>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

            {categories.map((style, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-center"
              >
                <div className="absolute inset-0 bg-red-600 scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100"></div>

                <div className="relative z-10">

                  <h3 className="text-xl font-bold">
                    {style}
                  </h3>

                  <p className="text-zinc-400 group-hover:text-white mt-3">
                    Trending 2026 Style
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-5 pb-24">

          <div className="relative overflow-hidden rounded-[40px] border border-red-600/30 bg-gradient-to-r from-zinc-900 to-black p-12 md:p-20 text-center">

            <div className="absolute top-0 right-0 w-72 h-72 bg-red-600/20 blur-[120px]" />

            <h2 className="text-4xl md:text-6xl font-bold">
              Transform Your Style Today
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              Experience luxury grooming, modern hairstyles
              and premium salon services.
            </p>

            <button className="mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-semibold transition hover:scale-105">
              Book Appointment
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Gallery;