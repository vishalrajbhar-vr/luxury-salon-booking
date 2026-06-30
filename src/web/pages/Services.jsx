import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Services() {
  const services = [
    {
      id: "haircut",
      title: "Hair Cut & Styling",
      price: "₹299",
      image:
        "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&q=80",
      description:
        "Professional haircut services including fade cuts, texture styling, modern hairstyles and premium finishing."
    },

    {
      id: "beard",
      title: "Beard Styling",
      price: "₹199",
      image:
        "https://images.unsplash.com/photo-1517832606299-7ae9b720a186?w=1200&q=80",
      description:
        "Luxury beard trimming, beard shaping and complete grooming services for a premium look."
    },

    {
      id: "facial",
      title: "Facial Treatment",
      price: "₹799",
      image:
        "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=1200&q=80",
      description:
        "Deep cleansing facial treatment designed to refresh, hydrate and rejuvenate your skin."
    },

    {
      id: "color",
      title: "Hair Coloring",
      price: "₹1499",
      image:
        "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80",
      description:
        "Professional hair coloring, highlights, global color and modern color transformation."
    },

    {
      id: "spa",
      title: "Spa & Massage",
      price: "₹999",
      image:
        "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80",
      description:
        "Relaxing spa treatments and massage therapy to help you refresh your body and mind."
    },

    {
      id: "makeup",
      title: "Makeup Service",
      price: "₹1999",
      image:
        "https://images.wsj.net/im-61087/8SR?width=1280&height=1280",
      description:
        "Party makeup, bridal makeup and professional beauty services using premium products."
    }
  ];

  return (
    <>
      <Navbar />

      <section className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-5">

          {/* Heading */}

          <div className="text-center">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Our Services
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-4">
              Premium Salon Services
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

            <p className="text-zinc-400 max-w-3xl mx-auto mt-6">
              Discover our complete range of grooming,
              beauty and wellness services crafted for
              modern lifestyles.
            </p>

          </div>

          {/* Top Service Links */}

          <div className="flex flex-wrap justify-center gap-4 mt-14">

            {services.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-6 py-3 rounded-full bg-zinc-900 border border-zinc-800 hover:bg-red-600 hover:border-red-600 transition duration-300"
              >
                {service.title}
              </a>
            ))}

          </div>

          {/* Service Sections */}

          <div className="mt-24 space-y-32">

            {services.map((service, index) => (
              <section
                key={service.id}
                id={service.id}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >

                {/* Image */}

                <div
                  className={`${index % 2 !== 0
                      ? "lg:order-2"
                      : ""
                    }`}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-[500px] object-cover rounded-3xl border border-zinc-800"
                  />
                </div>

                {/* Content */}

                <div>

                  <span className="uppercase tracking-[4px] text-red-500 font-semibold">
                    Premium Service
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold mt-4">
                    {service.title}
                  </h2>

                  <h3 className="text-red-600 text-2xl mt-4 font-semibold">
                    Starting From {service.price}
                  </h3>

                  <p className="text-zinc-400 mt-6 leading-8">
                    {service.description}
                  </p>

                  <p className="text-zinc-500 mt-5 leading-8">
                    Our experienced professionals use
                    premium-quality products and advanced
                    styling techniques to provide exceptional
                    results while ensuring comfort and
                    satisfaction for every client.
                  </p>

                  <button className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold transition duration-300">
                    Book Appointment
                  </button>

                </div>

              </section>
            ))}

          </div>

          {/* CTA */}

          <div className="mt-32 bg-zinc-900 border border-zinc-800 rounded-3xl p-12 text-center">

            <span className="uppercase tracking-[4px] text-red-500 font-semibold">
              Book Today
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Ready For Your New Look?
            </h2>

            <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
              Experience premium grooming and beauty services
              from our professional team. Book your appointment
              today and transform your style.
            </p>

            <button className="mt-8 bg-red-600 hover:bg-red-700 px-10 py-4 rounded-xl font-semibold transition duration-300">
              Book Now
            </button>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Services;