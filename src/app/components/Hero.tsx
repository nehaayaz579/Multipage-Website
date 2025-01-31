import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full text-center px-4 py-12 md:py-20 bg-white">
        <p className="text-2xl md:text-3xl font-sans text-orange-400 mb-4">
          Where Tranquility Meets Transformation.
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold tracking-wide mb-6">
          We show your{" "}
          <span className="text-orange-500">
            skin, hair, and <br /> body
          </span>{" "}
          the care and attention <br /> they deserve.
        </h1>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-6 py-3 md:px-8 md:py-4 rounded-md">
            Book Now
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full flex justify-center bg-white py-6 px-4 md:px-10">
        <Image src="/images/pic1.png" height={450} width={800} alt="pic" />
      </div>

      {/* Radiance Section */}
      <div className="w-full py-16 px-4 md:px-16 bg-white text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">
          Enhance your inner radiance
          <br /> at our beauty sanctuary and <br /> let your true beauty shine.
        </h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-6 py-3 md:px-8 md:py-4 rounded-md">
            Explore Service
          </button>
        </div>
      </div>

      {/* Three Image Section */}
 <div className="flex flex-wrap justify-center gap-6 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={`/images/pic${index + 2}.png`}
              height={250}
              width={300}
              alt="pic"
              className="w-full max-w-[300px]"
            />
            <h2 className="text-black text-2xl pt-5 pl-2 font-bold">Hair Salon Haven</h2>
            <a
              href="#"
              className="text-orange-500 pt-2 text-xl pl-2 inline-flex items-center"
            >
              Book Now
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        ))}
      </div>
**************
      {/* Two Image Section */}
      <div className="w-full flex flex-col md:flex-row justify-center gap-16 py-6 bg-white px-4 md:px-16">
        <Image src="/images/pic5.png" height={400} width={450} alt="pic" />
        <Image src="/images/pic6.png" height={400} width={450} alt="pic" />
      </div>

      {/* Beauty Section */}
      <div className="w-full py-6 px-4 md:px-16 flex justify-center gap-16 items-center bg-white">
        <h2 className="font-bold text-2xl lg:px-48 md:text-4xl text-center">
          The Place Of <span className="text-orange-500">Beauty</span>
        </h2>
        <p className="text-gray-600 lg:pr-20 text-lg md:text-xl text-center">
          Our heart goes out at what we do, and our slogan is making our
          customers feel beautiful and fabulous.
        </p>
      </div>

      {/* Featured Section */}
      <div className="w-full py-9 px-4 md:px-16 flex justify-center lg:gap-[500px] gap-16 items-center bg-white">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Featured</h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-5 py-2 md:px-10 md:py-4 rounded-md">
            Explore Collection
          </button>
        </div>
      </div>

      {/* Final Image Section */}
      <div className="w-full py-14 px-2 md:px-16 flex  justify-center gap-8">
        <div>
          <Image src="/images/pic01.png" height={300} width={350} alt="pic" />
        </div>
        <div>
          <Image src="/images/pic02.png" height={300} width={350} alt="pic" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
