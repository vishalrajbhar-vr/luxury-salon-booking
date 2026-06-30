import { FaPlay } from "react-icons/fa";


function TransparentBox() {

    return (
        <section
            className="relative h-[600px] bg-fixed bg-center bg-cover flex items-center justify-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000')",
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            {/* Content Box */}
            <div className="relative z-10 text-center px-6">

                {/* Play Button */}
                <button
                    onClick={() => window.open("https://youtu.be/ltJR0-QxTJk?si=5onwVzNZftgF4kqc", "_blank")}
                    className="w-24 h-24 rounded-full bg-white flex items-center justify-center mx-auto hover:scale-110 transition duration-300 shadow-2xl">
                    <FaPlay className="text-red-500 text-3xl ml-1" />
                </button>

                {/* Heading */}
                <h2 className="text-white text-4xl md:text-5xl font-bold mt-8">
                    Intro Video
                </h2>

                {/* Description */}
                <p className="text-zinc-300 max-w-2xl mx-auto mt-5 leading-8">
                    Experience premium grooming, luxury haircuts,
                    beard styling and modern salon services designed
                    for today's lifestyle.
                </p>

            </div>
        </section>
    );
}

export default TransparentBox;