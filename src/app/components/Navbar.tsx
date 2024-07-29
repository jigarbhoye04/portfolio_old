"use client";

import Image from "next/image";
import { usePathname } from "next/navigation"; // usePathname from next/navigation
import Link from "next/link"; // Link from next/link for better routing

export default function Navbar() {
   const currentRoute = usePathname();

   return (
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-1 bg-white bg-opacity-1 bg-black shadow-lg z-50">
         {/* Logo Section on the Left */}
         <div className="flex items-center">
            <Link
               href="/"
               rel="noopener noreferrer"
               className="flex items-center"
            >
               <Image
                  className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert ml-4"
                  src="/mylg.png"
                  alt="Next.js Logo"
                  width={50}
                  height={40}
                  priority
               />
               <span className="font-bold text-white ml-2">Jigar Bhoye</span>
            </Link>
         </div>

         {/* Navigation Links Section on the Right */}
         <div className="flex items-center space-x-4 mr-2">
            <Link
               href="/about"
               className={`relative px-4 py-1 text-lg font-bold text-white transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/about"
                     ? "bg-gray-200 text-black"
                     : "bg-gray-700"
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  About Me
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>

            <Link
               href="/projects"
               className={`relative px-4 py-1 text-lg font-bold text-white transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/projects"
                     ? "bg-gray-200 text-black"
                     : "bg-gray-700"
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Projects
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>

            <Link
               href="https://linktr.ee/jigarbhoye"
               className={`relative px-4 py-1 text-lg font-bold text-white transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/contact"
                     ? "bg-gray-200 text-black"
                     : "bg-gray-700 rounded-lg"
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Contact Me
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>
         </div>
      </nav>
   );
}
