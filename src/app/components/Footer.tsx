import React from 'react'
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <>
    <footer className="bg-slate-300 text-black py-6">
            <div className="container mx-auto text-center">
            <div className="flex justify-center">
            <Image src="/images/logo.png" width={250} height={300} alt="logo" />
             </div>   
                <p className="text-sm mt-1">Your Beauty, Our Passion</p>
                <p className="text-xs mt-4">&copy; {new Date().getFullYear()} Serene Beauty Salon. All rights reserved.</p>
            </div>
        </footer>  
    </>
  )
}

export default Footer
