"use client";

import Image from "next/image";
import { usePathname } from "next/navigation"; //usePathname from next/navigation
import Link from "next/link"; //Link from next/link for better routing

export default function Navbar() {

  const currentRoute = usePathname(); 

  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center p-4 bg-white bg-opacity-0 backdrop-blur-lg shadow-lg z-50">
      {/* Logo Section on the Left */}
      <div className="flex items-center">
        <Link
          href="/"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
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
      <div className="flex items-center space-x-4">
        <Link
          href="/about"
          className={`group rounded-lg border px-4 py-3 transition-colors ${currentRoute === "/about"
              ? "border-gray-300 bg-gray-100 dark:border-white dark:bg-gray-900" // Active style
              : "border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-gray-900" // Default hover style
            }`}
          rel="noopener noreferrer"
        >
          <h2 className="text-1xl font-semibold text-white">About Me</h2>
        </Link>

        <Link
          href="/projects"
          className={`group rounded-lg border px-4 py-3 transition-colors ${currentRoute === "/projects"
              ? "border-gray-300 bg-gray-100 dark:border-white dark:bg-gray-900" // Active style
              : "border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-gray-900" // Default hover style
            }`}
          rel="noopener noreferrer"
        >
          <h2 className="text-1xl font-semibold text-white">Projects</h2>
        </Link>

        <Link
          href="https://linktr.ee/jigarbhoye"
          className={`group rounded-lg border px-4 py-3 transition-colors ${currentRoute === "/contact"
              ? "border-gray-300 bg-gray-100 dark:border-white dark:bg-gray-900" // Active style
              : "border-transparent hover:border-gray-300 hover:bg-gray-100 hover:dark:border-white hover:dark:bg-gray-900" // Default hover style
            }`}
          rel="noopener noreferrer"
        >
          <h2 className="text-1xl font-semibold text-white">Contact Me</h2>
        </Link>
      </div>
    </nav>
  );
}
