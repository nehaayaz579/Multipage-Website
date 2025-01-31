import React from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Service = () => {
  return (
    <>
      <Navbar />
      <div className="h-auto w-full text-center bg-white px-4 md:px-8">
        <h1 className="font-semibold tracking-wide text-4xl p-3 text-orange-400">
          Services & Quiries
        </h1>
        <div className="flex flex-wrap justify-center bg-white gap-16 pt-11">
          <Image
            src="/images/pic41.png"
            height={400}
            width={450}
            alt="pic"
            className="w-full max-w-[450px]"
          />
          <Image
            src="/images/pic41(2).png"
            height={400}
            width={450}
            alt="pic"
            className="w-full max-w-[450px]"
          />
        </div>
       {/* Beauty Section */}
      <div className="w-full py-9 px-4 md:px-16 flex justify-center gap-16 items-center bg-white">
        <h2 className="font-bold text-2xl py-5 lg:px-48 md:text-4xl text-center">
          The Place Of <span className="text-orange-500">Beauty</span>
        </h2>
        <p className="text-gray-600 lg:pr-20 text-lg md:text-xl text-center">
          Our heart goes out at what we do, and our slogan is making our
          customers feel beautiful and fabulous.
        </p>
      </div>
      </div>

      
      <div className="w-full py-9 px-4 md:px-16 flex justify-center lg:gap-[500px] gap-12 items-center bg-white">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Everyday Makeup</h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-5 py-2 md:px-10 md:py-4 rounded-md">
            Explore all
          </button>
        </div>
      </div>
      {/* Service items */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={`/images/pic${42 + index}.png`}
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
      <div className="w-full py-9 px-4 md:px-16 flex justify-center lg:gap-[500px] gap-12 items-center bg-white">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Bridal Makeup</h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-5 py-2 md:px-10 md:py-4 rounded-md">
            Explore all
          </button>
        </div>
      </div>
      {/* Service items */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={`/images/pic${45 + index}.png`}
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
      <div className="w-full py-9 px-4 md:px-16 flex justify-center lg:gap-[500px] gap-12 items-center bg-white">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Special Occassion Makeup</h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-5 py-2 md:px-10 md:py-4 rounded-md">
            Explore all
          </button>
        </div>
      </div>
      {/* Service items */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={`/images/pic${48 + index}.png`}
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
      <div className="w-full py-9 px-4 md:px-16 flex justify-center lg:gap-[500px] gap-12 items-center bg-white">
        <h2 className="font-bold text-2xl md:text-4xl text-center">Theatrical Makeup</h2>
        <div className="flex justify-center">
          <button className="font-bold text-white bg-black px-5 py-2 md:px-10 md:py-4 rounded-md">
            Explore all
          </button>
        </div>
      </div>
      {/* Service items */}
      <div className="flex flex-wrap justify-center gap-6 p-8">
        {[...Array(3)].map((_, index) => (
          <div key={index} className="flex flex-col items-center text-center w-full sm:w-1/3 lg:w-1/4">
            <Image
              src={`/images/pic${48 + index}.png`}
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



      {/* Repeat the same for other categories (Bridal Makeup, Special Occasion, etc.) */}

      <div className="w-full p-8 text-center bg-white">
        <h1 className="font-bold text-xl text-orange-500">By Categories</h1>
        
          <ul className="text-lg">
            <li>Makeup</li>
            <li>Hair</li>
            <li>Skincare</li>
            <li>Waxing</li>
            <li>Spa</li>
          </ul>
      
      </div>
      <Footer />
    </>
  );
};

export default Service;
