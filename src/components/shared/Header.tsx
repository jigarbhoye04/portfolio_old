"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";

export default function Header() {
   const currentRoute = usePathname();
   const { theme, setTheme } = useTheme();

   const themeChange = () => {
      setTheme(theme === "light" ? "dark" : "light");
   };

   return (
      <nav className={`fixed top-0 left-0 right-0 flex justify-between items-center p-1 shadow-lg z-20 
        ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
         <div className="flex items-center">
            <Link
               href="/"
               rel="noopener noreferrer"
               className="flex items-center"
            >
            <Image
               className={`ml-4 border rounded-full ${theme === 'dark' ? 'border-white' : 'border-black'}`}
               src={theme === 'dark' ? "/LOGO.png" : "/mylg.png"}
               alt="Logo"
               width={50}
               height={40}
               priority
               blurDataURL={theme === 'dark' ? "/LOGO.png" : "/mylg.png"}
               placeholder="blur"
            />
               <span className="font-bold ml-2">Jigar Bhoye</span>
            </Link>
         </div>

         <div className="flex items-center space-x-4 mr-2">
            <Link
               href="/"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/" 
                     ? (theme === 'dark' ? 'bg-gray-900 text-cyan-300' : 'bg-gray-200 text-cyan-900') 
                     : (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-700 text-white')
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Home
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>
            <Link
               href="/about"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/about"
                     ? (theme === 'dark' ? 'bg-gray-800 text-cyan-300' : 'bg-gray-200 text-cyan-900')
                     : (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-700 text-white')
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Blogs
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>

            <Link
               href="/projects"
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/projects"
                     ? (theme === 'dark' ? 'bg-gray-800 text-cyan-300' : 'bg-gray-200 text-cyan-900')
                     : (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-700 text-white')
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
               className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
                  currentRoute === "/contact"
                     ? (theme === 'dark' ? 'bg-gray-800 text-blue-300' : 'bg-gray-200 text-blue-900')
                     : (theme === 'dark' ? 'bg-gray-700' : 'bg-gray-700 text-white')
               }`}
               rel="noopener noreferrer"
            >
               <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
                  Contact Me
               </span>
               <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
            </Link>
            <button onClick={themeChange}>
               {theme === "light" ? <MoonIcon /> : <SunIcon />}
            </button>
         </div>
      </nav>
   );
}
