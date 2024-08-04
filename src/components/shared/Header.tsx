"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react"; // Import useState
import { FaBars, FaTimes } from "react-icons/fa"; // Import menu icons

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu
  const currentRoute = usePathname();

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full left-0 right-0 top-0 flex justify-between items-center p-4 bg-neutral-900 text-white border-b border-neutral-700">
      {/* Logo and Name */}
      <div className="flex items-center">
        <Link href="/" rel="noopener noreferrer" className="flex items-center">
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
          <span className="font-bold ml-2">Jigar Bhoye</span>
        </Link>
      </div>

      {/* Mobile menu toggle button */}
      <div className="sm:hidden">
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center justify-center flex-1 space-x-4">
        <Link
          href="/"
          className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
            currentRoute === "/" ? "bg-neutral-900 text-blue-300" : "text-white"
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
              ? "bg-neutral-900 text-blue-300"
              : "text-white"
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
              ? "bg-neutral-900 text-blue-300"
              : "text-white"
          }`}
          rel="noopener noreferrer"
        >
          <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
            About Me
          </span>
          <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
        </Link>
      </div>

      {/* Contact Link on the Right */}
      <div className="hidden sm:flex items-center">
        <Link
          href="https://linktr.ee/jigarbhoye"
          className={`relative px-4 py-1 text-lg font-bold transition-all duration-500 ease-in-out group rounded-lg ${
            currentRoute === "/contact"
              ? "bg-neutral-900 text-blue-300"
              : "text-white"
          }`}
          rel="noopener noreferrer"
        >
          <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-black">
            Contact Me
          </span>
          <span className="absolute inset-0 scale-x-0 scale-y-1 bg-white transition-transform duration-500 ease-in-out group-hover:scale-x-100 group-hover:scale-y-100 rounded-lg"></span>
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-neutral-900 text-white flex flex-col items-center space-y-4 p-4 sm:hidden z-50">
          <Link
            href="/"
            className={`w-full text-center py-2 text-lg font-bold transition-all duration-500 ease-in-out rounded-lg ${
              currentRoute === "/" ? "bg-neutral-900 text-blue-300" : "text-white"
            }`}
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`w-full text-center py-2 text-lg font-bold transition-all duration-500 ease-in-out rounded-lg ${
              currentRoute === "/projects" ? "bg-neutral-900 text-blue-300" : "text-white"
            }`}
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className={`w-full text-center py-2 text-lg font-bold transition-all duration-500 ease-in-out rounded-lg ${
              currentRoute === "/about" ? "bg-neutral-900 text-blue-300" : "text-white"
            }`}
            rel="noopener noreferrer"
            onClick={toggleMobileMenu}
          >
            About Me
          </Link>
          <Link
            href="https://linktr.ee/jigarbhoye"
            className={`w-full text-center py-2 text-lg font-bold transition-all duration-500 ease-in-out rounded-lg ${
              currentRoute === "/contact" ? "bg-neutral-900 text-blue-300" : "text-white"
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
