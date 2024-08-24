"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";

const ContactMePage = () => {
   return (
    <>
      <Header />
      <div className="bg-gray-900 text-white min-h-screen py-10 px-4">
         <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Me</h1>

            {/* Contact Form */}
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
               <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
               <form action="/api/contact" method="POST" className="space-y-4">
                  <div>
                     <label htmlFor="name" className="block text-lg mb-2">
                        Name
                     </label>
                     <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Your Name"
                     />
                  </div>
                  <div>
                     <label htmlFor="email" className="block text-lg mb-2">
                        Email
                     </label>
                     <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Your Email"
                     />
                  </div>
                  <div>
                     <label htmlFor="message" className="block text-lg mb-2">
                        Message
                     </label>
                     <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        className="w-full px-4 py-2 rounded-md border border-gray-700 bg-gray-900 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        placeholder="Your Message"
                     ></textarea>
                  </div>
                  <button
                     type="submit"
                     className="bg-yellow-500 text-black py-2 px-4 rounded-md hover:bg-yellow-400 transition"
                  >
                     Send Message
                  </button>
               </form>
            </div>
         </div>
      </div>
      <Footer />
    </>
   );
};

export default ContactMePage;
