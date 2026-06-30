import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=1920",
    "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1920",
    "https://images.unsplash.com/photo-1512690459411-b0fd1c86b8c8?q=80&w=1920",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1920",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-black">

      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[2500ms]
          ${currentImage === index ? "opacity-100" : "opacity-0"}`}
          style={{
            backgroundImage: `url(${img})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/20 to-black/10" />

      {/* Red Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/20 blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/20 blur-[100px]" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 min-h-screen flex items-center">

        <div className="max-w-3xl">

          <span className="uppercase tracking-[4px] text-red-500 font-semibold">
            Luxury Salon & Spa
          </span>

          <h1 className="mt-6 text-white font-black leading-tight text-5xl md:text-7xl lg:text-8xl">
            Modern
            <span className="text-red-600"> Style</span>
            <br />
            Meets Luxury
          </h1>

          <p className="mt-6 text-zinc-300 text-lg md:text-xl max-w-2xl">
            Premium grooming, beauty treatments, spa experiences
            and professional styling crafted for modern lifestyles.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">

            <Link
              to="/booking"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Book Appointment
            </Link>

            <Link
              to="/services"
              className="border border-white hover:border-red-600 hover:text-red-500 px-8 py-4 rounded-xl font-semibold transition duration-300"
            >
              Explore Services
            </Link>

          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-14">

            <div>
              <h2 className="text-red-600 text-3xl font-bold">10+</h2>
              <p className="text-zinc-400">Years Experience</p>
            </div>

            <div>
              <h2 className="text-red-600 text-3xl font-bold">5000+</h2>
              <p className="text-zinc-400">Happy Clients</p>
            </div>

            <div>
              <h2 className="text-red-600 text-3xl font-bold">25+</h2>
              <p className="text-zinc-400">Experts</p>
            </div>

          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

    </section>
  );
}

export default Hero;