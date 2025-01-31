import Image from 'next/image';  
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Contact = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-orange-600 mb-4">Serene Salon</h1>
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Contact Us</h2>
        
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              placeholder="Type your message here"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
            ></textarea>
          </div>

          <button type="submit" className="w-full py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-400 focus:ring-2 focus:ring-orange-400">
            Send Message
          </button>
        </form>
      </div>
    </div>
   <Footer/>
</>  
);
};

export default Contact;
