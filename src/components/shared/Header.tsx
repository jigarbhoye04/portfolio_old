"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
   const currentRoute = usePathname();

   return (
      <nav className={`w-full left-0 right-0 top-0 flex justify-between items-center p-4 bg-neutral-900 text-white border-b border-neutral-700`}>
         <div className="flex items-center">
            <Link
               href="/"
               rel="noopener noreferrer"
               className="flex items-center"
            >
               <Image
                  className="ml-4 border rounded-full border-white"
                  src="/LOGO.png"
                  alt="Logo"
                  width={50}
                  height={40}
                  priority
                  blurDataURL="/LOGO.png"
                  placeholder="blur"
               />
               <span className="font-bold ml-2 hidden sm:block">Jigar Bhoye</span>
            </Link>
         </div>

         <div className="flex items-center space-x-4 mr-2">
            <Link
               href="/"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/" 
                     ? 'bg-neutral-900 text-blue-300'
                     : 'text-white'
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Home
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>
            <Link
               href="/projects"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/projects"
                     ? 'bg-neutral-900 text-blue-300'
                     : 'text-white'
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Projects
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>

            <Link
               href="/about"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/about"
                     ? 'bg-neutral-900 text-blue-300'
                     : 'text-white'
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  About Me
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>
         </div>
         <div className="flex item-center">
            <Link
               href="https://linktr.ee/jigarbhoye"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/contact"
                     ? 'bg-neutral-900 text-blue-300'
                     : 'text-white'
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
