"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes, FaHome } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdOutlinePerson4 } from "react-icons/md";
// import {
//    Dropdown,
//    DropdownTrigger,
//    DropdownMenu,
//    DropdownSection,
//    DropdownItem,
// } from "@nextui-org/dropdown";
import { Button } from "@nextui-org/button";

export default function Header() {
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const currentRoute = usePathname();
   const items = [
      { key: "linktree", label: "Linktree" },
      { key: "contact", label: "Send a message" },
   ];

   const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
   };

   return (
      <nav className="flex justify-between items-center p-4 bg-neutral-900 text-white border-b border-neutral-700">
         {/* Logo and Name */}
         <div className="flex items-center">
            <Link
               href="/"
               rel="noopener noreferrer"
               className="flex items-center"
            >
               <Image
                  className="ml-4 border rounded-full border-white opacity-70 z-100"
                  src="/LOGO.png"
                  alt="Logo"
                  width={30}
                  height={20}
                  priority
                  blurDataURL="/LOGO.png"
                  placeholder="blur"
               />
               <span className=" ml-2">iam8jigx</span>
            </Link>
         </div>

         {/* Mobile menu toggle button */}
         <div className="sm:hidden">
            <button onClick={toggleMobileMenu} className="text-white">
               {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
         </div>

         {/* Desktop Menu */}
         <div className="hidden sm:inline-flex items-center justify-center space-x-4 border border-neutral-700 rounded-full">
            <Link
               href="/"
               className={`px-4 py-1 text-lg flex items-center space-x-2 rounded-lg ${
                  currentRoute === "/" ? "text-blue-400" : "text-white"
               }`}
               rel="noopener noreferrer"
            >
               <FaHome size={16} />
               <span>Home</span>
            </Link>

            <Link
               href="/projects"
               className={`px-4 py-1 text-lg flex items-center space-x-2 rounded-lg ${
                  currentRoute === "/projects" ? "text-blue-400" : "text-white"
               }`}
               rel="noopener noreferrer"
            >
               <GrProjects size={16} />
               <span>My Projects</span>
            </Link>

            <Link
               href="/about"
               className={`pr-4 py-1 text-lg flex items-center space-x-2 rounded-lg ${
                  currentRoute === "/about" ? "text-blue-400" : "text-white"
               }`}
               rel="noopener noreferrer"
            >
               <MdOutlinePerson4 size={16} />
               <span>About Me</span>
            </Link>
         </div>

         {/* Dropdown Menu */}
         <div className="hidden md:block">
            <a
               href="/contact"
               className="text-white border-neutral-700 hover:border-blue-400 
               border px-4 py-2 rounded-md"
            >
               Contact Me
            </a>
         </div>
         {/* <div className="hidden md:block">
            <Dropdown>
               <DropdownTrigger>
                  <Button
                     variant="bordered"
                     className="text-white border-neutral-700 hover:border-blue-400"
                  >
                     Contact Me
                  </Button>
               </DropdownTrigger>
               <DropdownMenu
                  aria-label="Contact Menu"
                  className="bg-neutral-950 border border-neutral-700 rounded-lg shadow-lg"
                  onAction={(key) => {
                     if (key === "linktree") {
                        window.location.href = "https://linktr.ee/jigarbhoye";
                     } else if (key === "contactme") {
                        window.location.href = "/contactme";
                     }
                  }}
               >
                  <DropdownItem
                     key="contact"
                     className="rounded-md hover:bg-neutral-800 hover:text-blue-400 transition-colors"
                  >
                     <Link href="/contact" className="w-full block py-2 px-4">
                        Send a message
                     </Link>
                  </DropdownItem>
                  <DropdownItem
                     key="linktree"
                     className="rounded-md hover:bg-neutral-800 hover:text-blue-400 transition-colors"
                  >
                     <Link
                        href="https://linktr.ee/jigarbhoye"
                        className="w-full block py-2 px-4"
                     >
                        Linktree
                     </Link>
                  </DropdownItem>
               </DropdownMenu>
            </Dropdown>
         </div> */}

         {/* Mobile Menu */}
         {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 w-11/12 mx-auto bg-neutral-900 text-white flex flex-col items-center space-y-2 p-4 border border-neutral-700 rounded-lg sm:hidden z-50">
               <Link
                  href="/"
                  className={`w-full text-center py-2 text-lg  rounded-md border ${
                     currentRoute === "/"
                        ? "bg-neutral-900 text-blue-400 border-blue-300"
                        : "text-white border-neutral-700"
                  }`}
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
               >
                  Home
               </Link>
               <Link
                  href="/projects"
                  className={`w-full text-center py-2 text-lg  rounded-md border ${
                     currentRoute === "/projects"
                        ? "bg-neutral-900 text-blue-400 border-blue-300"
                        : "text-white border-neutral-700"
                  }`}
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
               >
                  Projects
               </Link>
               <Link
                  href="/about"
                  className={`w-full text-center py-2 text-lg  rounded-md border ${
                     currentRoute === "/about"
                        ? "bg-neutral-900 text-blue-400 border-blue-300"
                        : "text-white border-neutral-700"
                  }`}
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
               >
                  About Me
               </Link>
               <Link
                  href="https://linktr.ee/jigarbhoye"
                  className={`w-full text-center py-2 text-lg  rounded-md border ${
                     currentRoute === "/contact"
                        ? "bg-neutral-900 text-blue-400 border-blue-300"
                        : "text-white border-neutral-700"
                  }`}
                  rel="noopener noreferrer"
                  onClick={toggleMobileMenu}
               >
                  Contact Me
               </Link>
            </div>
         )}
      </nav>
   );
}
