"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaDiscord, FaInstagram, FaSpotify } from "react-icons/fa";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import ContactForm from "@/components/utility/email";
import DividerMe from "@/components/shared/DividerMe";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

const ContactMePage = () => {
   return (
      <>
         <Header />
         <div className="bg-neutral-900 text-white border-b border-neutral-700">
            <ContactForm />
         </div>
         <DividerMe />
         {/* <Footer /> */}
         <footer className="bg-neutral-900 text-white border-b border-neutral-700 p-4">
         <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Left Section */}
            <div>
               <h4 className="text-lg font-semibold text-yellow-50 mb-4">
                  Where <span className="text-green-600">aesthetics</span> &{" "}
                  <span className="text-sky-300">functionality</span> meet
               </h4>
            </div>

            {/* Center Section */}
            <div className="flex justify-center">
               <div>
                  
                  <h4 className="text-lg font-semibold mb-4">Explore</h4>
                  <ul className="space-y-2">
                     <li>
                        <Link href="/" className="text-yellow-500">
                           Home
                        </Link>
                     </li>
                     <li>
                        <Link href="/about" className="text-yellow-500">
                           About Me
                        </Link>
                     </li>
                     <li>
                        <Link href="https://linktr.ee/jigarbhoye" className="text-yellow-500">
                           Linktree
                        </Link>
                     </li>
                  </ul>
               </div>
               <div className="ml-10">
                  <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                  <ul className="flex space-x-4 space-y-2">
                     <li>
                        <a
                           href="https://www.linkedin.com/in/jigar-bhoye-188667251/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaLinkedin className="text-blue-500 w-6 h-8 mt-2" />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://github.com/jigarbhoye04"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaGithub className="text-gray-100 w-6 h-8" />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://x.com/jigarbhoye04"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaXTwitter className="text-gray-100 w-6 h-8" />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://discord.com/channels/jigx.04"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaDiscord className="bg-blue-700 rounded-full p-1 text-gray-200 w-8 h-8" />
                        </a>
                     </li>
                     <li>
                        <a
                           href="https://instagram.com/iamjigx"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaInstagram className="text-pink-500 w-6 h-8" />
                        </a>
                     </li>
                     {/* <li>
                        <a
                           href="https://facebook.com/jigarbhoyeofficial"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaFacebook className="text-blue-500 w-6 h-8" />
                        </a>
                     </li> */}
                     <li>
                        <a
                           href="https://open.spotify.com/user/rlf9k73tkyeg4n0o34ezact5f"
                           target="_blank"
                           rel="noopener noreferrer"
                        >
                           <FaSpotify className="text-green-500 w-6 h-8" />
                        </a>
                     </li>
                  </ul>
               </div>
            </div>

            {/* Right Section */}
            <div className="text-right">
               <Link href="/contact" className="text-blue-500">
                  <div className="mb-6">
                     <h4 className="text-lg font-semibold text-yellow-500">
                        Contact Me
                     </h4>
                     <p className="text-gray-500">Say Hello!</p>
                  </div>
               </Link>
               <Link href="/projects" className="text-blue-500">
                  <div>
                     <h4 className="text-lg font-semibold text-yellow-500">
                        My Projects
                     </h4>
                     <p className="text-gray-500">Explore Projects</p>
                  </div>
               </Link>
            </div>
         </div>

         {/* Bottom Section */}
         <div className="mt-10 bg-gray-900 p-3 rounded-lg flex flex-col sm:flex-row sm:justify-between items-center">
            <p className="text-sm text-blue-500 mb-2 sm:mb-0">
               <Link
                  href="/"
                  className="text-blue-500"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  iam8jigx
               </Link>
            </p>
            <p className="text-center text-sm text-gray-500 mb-2 sm:mb-0">
               ©2024 Made with ❤️ Jigar
            </p>
            <p className="text-sm text-gray-500">Gujarat, India</p>
         </div>
      </footer>
      </>
   );
};

export default ContactMePage;
