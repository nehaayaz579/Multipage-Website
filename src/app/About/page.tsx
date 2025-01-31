import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="h-auto w-full flex justify-center bg-white py-5">
        <Image
          src="/images/pic33.png"
          height={450}
          width={1200}
          alt="pic"
          className="w-full max-w-screen-lg"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:pt-9 lg:px-36 sm:px-6">
        {/* Image */}
        <div className="flex justify-center lg:w-1/3 sm:w-full mb-6 lg:mb-0">
          <Image src="/images/logo.png" width={250} height={300} alt="logo" />
        </div>

        {/* Text Section */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          If it makes you feel
          <br />
          <span className="text-orange-500">beautiful</span>, then{" "}
          <span className="text-orange-500">do it.</span>
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl">
          Life inside our beauty salon is never a<br />
          dull moment, and the enthusiasm of
          <br />
          wanting to satisfy our customers keeps
          <br />
          all of us united.
        </p>
      </div>

      <div className="h-auto w-full py-5 text-center">
        <h1 className="font-bold text-4xl py-7">Our Story</h1>
        <p className="font-normal px-4 md:px-20 py-3">
          Since 2012 in a charming Hawaii Town, Serene Beauty emerged as a haven
          for beauty and tranquility.
          <br />
          Founded by Sarah, a passionate hairstylist, the salons simple yet
          profound vision was to enhance natural
          <br />
          beauty while providing a peaceful escape.
          <br />
          With time, Serene Beautys dedicated team grew, offering a range of
          services from esthetics to makeup. It
          <br />
          became a beloved part of the community, known for its serene ambiance
          and commitment to giving back
          <br />
          through charity events.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-6 px-4">
        <Image src="/images/pic34.png" height={400} width={250} alt="pic" />
        <Image src="/images/pic35.png" height={400} width={250} alt="pic" />
        <Image src="/images/pic36.png" height={400} width={250} alt="pic" />
      </div>

      <div className="flex flex-wrap justify-center gap-12 py-12 px-4">
        <div className="h-auto w-full sm:w-[450px] md:w-[500px] flex justify-center py-6 bg-white">
          <Image src="/images/pic40.png" height={450} width={500} alt="pic" />
        </div>
        <div className="flex flex-col items-center text-center md:text-left pt-8 max-w-md">
          <h2 className="text-xl text-gray-400">The lady of the hour (CEO)</h2>
          <h2 className="text-4xl font-bold pt-3">Sarah Johnson</h2>
          <p className="text-[16px] pt-2 text-gray-500">
            Meet Sarah, a visionary hairstylist with a passion for beauty and a
            heart full of dreams. As the owner of Serene Beauty, her journey
            unfolds in the enchanting world of tranquil transformations.
          </p>

          <div className="pt-4 space-y-4">
            <div className="flex items-center gap-6">
              <button className="bg-black text-white h-11 w-[100px] font-bold text-xl">
                O1
              </button>
              <div>
                <h2 className="font-bold text-xl">
                  Master Stylist of the Year:
                </h2>
                <p className="text-gray-500">
                  Sarahs exceptional talent and dedication to her craft earned
                  her the prestigious title of Master Stylist of the Year at
                  the National Beauty Excellence Awards.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button className="bg-black text-white h-11 w-[100px] font-bold text-xl">
                O2
              </button>
              <div>
                <h2 className="font-bold text-xl">Community Impact Award:</h2>
                <p className="text-gray-500">
                  Sarah received the Community Impact Award for her charitable
                  work and contributions to local causes through Serene Beauty.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-8">
              <button className="bg-black text-white h-11 w-[100px] font-bold text-xl">
                O3
              </button>
              <div>
                <h2 className="font-bold text-xl">Green Beauty Innovator:</h2>
                <p className="text-gray-500">
                  Sarahs commitment to eco-friendly and sustainable beauty
                  practices was acknowledged with the Green Beauty Innovator
                  award.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto w-full flex flex-col items-center bg-slate-50 p-10">
        <h2 className="font-bold text-5xl px-4 mb-6">Meet Our Team</h2>
        <p className="font-normal text-lg px-4 md:px-16 mb-6">
          Allow me to introduce you to the talented individuals who make Serene
          Beauty the extraordinary place it is.
        </p>
        <button className="font-bold text-white bg-black px-8 py-2">
          Explore All Team
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-6 px-4">
        <div className="flex flex-col items-center text-center max-w-[300px]">
          <Image src="/images/pic37.png" height={250} width={300} alt="pic" />
          <h2 className="text-black text-2xl pt-5 font-bold">
            Hair Salon Haven
          </h2>
          <a
            href="#"
            className="text-orange-500 pt-2 text-xl inline-flex items-center"
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

        <div className="flex flex-col items-center text-center max-w-[300px]">
          <Image src="/images/pic38.png" height={250} width={300} alt="pic" />
          <h2 className="text-black text-2xl pt-5 font-bold">
            Hair Salon Haven
          </h2>
          <a
            href="#"
            className="text-orange-500 pt-2 text-xl inline-flex items-center"
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

        <div className="flex flex-col items-center text-center max-w-[300px]">
          <Image src="/images/pic39.png" height={250} width={300} alt="pic" />
          <h2 className="text-black text-2xl pt-7 font-bold">
            Hair Salon Haven
          </h2>
          <a
            href="#"
            className="text-orange-500 pt-2 text-xl inline-flex items-center"
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
      </div>

      <div className="flex w-full justify-center bg-slate-50 p-10">
        <div className="w-full sm:w-[300px] text-center mb-6">
          <h1 className="font-bold text-xl text-orange-500">Brand</h1>
          <ul className="font-sans text-lg">
            <li>Our Story</li>
            <li>Career</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="w-full sm:w-[300px] text-center mb-6">
          <h1 className="font-bold text-xl text-orange-500">Support</h1>
          <ul className="font-sans text-lg">
            <li>Booking</li>
            <li>Exchange & Return</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="w-full sm:w-[300px] text-center mb-6">
          <h1 className="font-bold text-xl text-orange-500">Connect</h1>
          <ul className="font-sans text-lg">
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;
