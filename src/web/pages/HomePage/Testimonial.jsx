import { FaStar, FaQuoteRight } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function Testimonial() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Entrepreneur",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      review:
        "Excellent service and professional staff. The haircut and beard styling exceeded my expectations.",
    },
    {
      name: "Aman Verma",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      review:
        "The salon atmosphere is premium and relaxing. Definitely my go-to place for grooming.",
    },
    {
      name: "Vikash Singh",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/68.jpg",
      review:
        "Highly skilled barbers with attention to detail. One of the best salon experiences I've had.",
    },
    {
      name: "Rohit Kumar",
      role: "Designer",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      review:
        "Amazing fade haircut and beard styling. Premium experience from start to finish.",
    },
  ];

  return (
    <section className="relative bg-black py-24 overflow-hidden">

      {/* Red Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/10 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-600/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-5 relative z-10">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-red-500 uppercase tracking-[4px] font-semibold">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
            What Our Clients Say
          </h2>

          <div className="w-24 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6">
            Trusted by thousands of satisfied clients who choose
            our salon for premium grooming and styling.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="py-4">

              <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-lg p-8 hover:border-red-600 transition-all duration-500 hover:-translate-y-3">

                {/* Quote Icon */}
                <div className="absolute top-6 right-6 text-red-600 text-5xl opacity-20">
                  <FaQuoteRight />
                </div>

                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-red-600/20 blur-3xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Stars */}
                <div className="flex gap-1 text-yellow-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Review */}
                <p className="text-zinc-300 leading-8">
                  "{item.review}"
                </p>

                {/* User */}
                <div className="flex items-center gap-4 mt-8">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-red-600"
                  />

                  <div>
                    <h4 className="text-white font-bold text-lg">
                      {item.name}
                    </h4>

                    <p className="text-zinc-400 text-sm">
                      {item.role}
                    </p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}

export default Testimonial;