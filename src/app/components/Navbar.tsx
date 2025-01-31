"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white ">
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-10 h-[67px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
        <Image src="/images/logo.png" width={230} height={180} alt="logo" />
        
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-16 text-sm font-bold  text-gray-600">
            {[
              "Home",
              "Service",
              "About",
              "Contact",
            ].map((item, index) => (
              <li key={index} className="hover:text-black text-[18px]">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Login/Register */}
          <div className="hidden md:flex items-center gap-2 cursor-pointer">
           
          <div className="hidden md:flex justify-end pt-2">
            <Image src="/images/icons.png" width={120} height={100} alt="icons" />
          </div>
          </div>

          {/* Icons */}
        

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-orange-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 text-base font-medium">
            {[
               "Home",
               "Service",
               "About",
               "Contact",
            ].map((item, index) => (
              <li key={index} className="hover:text-black">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
