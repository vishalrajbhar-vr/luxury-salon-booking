import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function AboutSection() {
    const navigate = useNavigate();
    return (
        <section className="bg-black text-white py-24">
            <div className="max-w-7xl mx-auto px-5">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div>

                        <span className="text-red-500 uppercase tracking-[4px] font-semibold">
                            About Us
                        </span>

                        <h2 className="text-4xl md:text-5xl font-bold mt-4">
                            Luxury Salon &
                            <span className="text-red-600"> Grooming</span>
                        </h2>

                        <div className="w-20 h-1 bg-red-600 mt-5 rounded-full"></div>

                        <p className="text-zinc-400 mt-8 leading-8">
                            We provide premium grooming services with modern
                            styling techniques, luxury salon treatments and
                            personalized care to help you look your best.
                        </p>

                        <p className="text-zinc-400 mt-6 leading-8">
                            Our expert stylists are dedicated to delivering
                            exceptional haircuts, beard styling, facials,
                            spa treatments and complete grooming solutions.
                        </p>

                        <button
                        onClick={()=>navigate("/contact")} 
                        className="mt-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105">
                            Contact Us
                            <ArrowRight size={20} />
                        </button>

                    </div>

                    {/* Right Images */}
                    <div className="grid grid-cols-2 gap-5">

                        <div className="overflow-hidden rounded-3xl">
                            <img
                                src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800"
                                alt="Haircut"
                                className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
                            />
                        </div>

                        <div className="overflow-hidden rounded-3xl mt-10">
                            <img
                                src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800"
                                alt="Salon"
                                className="w-full h-[500px] object-cover hover:scale-110 transition duration-700"
                            />
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default AboutSection;