"use client";

import Image from "next/image";
import Link from "next/link";
import IconsTech from "../shared/IconsTech";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function MainFirst() {
   return (
      <div className="w-full min-h-screen bg-neutral-900 text-gray-300 border-b border-neutral-700 flex flex-col items-center justify-between px-4 py-8">
         <div className="w-full max-w-7xl">
            {/* content section */}
            <div className="flex flex-col justify-center items-start">
               <div className="flex items-center space-x-4 mb-4">
                  <Image
                     src="/avatar.png"
                     alt="avatar"
                     width={64} // default width
                     height={64} // default height
                     className="w-12 h-12 sm:w-16 sm:h-16 rounded-full"
                  />
                  <span className="text-sm sm:text-lg bg-neutral-800 py-1 px-3 rounded-full">
                     Hello, I&apos;m Jigar
                  </span>
               </div>
               <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                  <span className="text-purple-500">GEEK</span>
                  <br />
                  <span>PASSIONATE</span>
                  <br />
                  <span className="text-yellow-500">NOT A DESIGNER</span> &{" "}
                  <span className="text-teal-400">DEVELOPER(yes)</span>.
               </h1>
               <p className="text-lg sm:text-xl mb-4">
                  I create stuff (!) <br />
                  <span className="text-purple-500">consistent</span>,{" "}
                  <span className="text-yellow-500">mostly aesthetics</span>,
                  and <span className="text-teal-400">some fun!</span>
               </p>
               <div className="flex flex-wrap items-center space-x-2 space-y-2 mb-4">
                  <Link href="https://www.linkedin.com/in/jigar-bhoye-188667251/">
                     <span className="flex items-center bg-blue-500 text-black px-3 py-2 rounded-full text-sm">
                        Let&apos;s Connect <FaLinkedin className="ml-2" />
                     </span>
                  </Link>

                  <Link href="https://github.com/jigarbhoye04">
                     <span className="flex items-center space-x-1 bg-neutral-800 text-neutral-200 px-3 py-2 rounded-full text-sm mb-2">
                        <FaGithub /> <span>@jigarbhoye04</span>
                     </span>
                  </Link>
               </div>
               <p className="text-sm sm:text-lg text-gray-400 mb-4">
                  {"//"} Full Stack & Competitive Programming
               </p>

               <hr className="border-gray-700 w-full my-4" />

               <p className="text-sm sm:text-lg mb-4">
                  Passionate developer and Pre Final Year student at{" "}
                  <span className="font-semibold border-b border-gray-700">
                     Nirma University
                  </span>
                  . I love web development, data structures, and exploring new
                  technologies.
               </p>

               {/* focus section */}
               <section className="mb-6">
                  <h2 className="text-lg sm:text-xl font-bold mb-2 text-purple-400">
                     Current Focus
                  </h2>
                  <p className="text-sm sm:text-lg">
                     Concentrating on web development and leveraging modern
                     tools to build scalable and efficient applications &
                     Parrallely griding on{" "}
                     <span className="border-b border-gray-700">
                        competitive programming
                     </span>{" "}
                     to enhance my problem-solving skills.
                  </p>
               </section>

               {/* contact section - hidden on mobile */}
               <section className="hidden sm:block">
                  <h2 className="text-lg sm:text-xl font-bold mb-2">
                     Contact Me
                  </h2>
                  <p className="text-sm sm:text-md">
                     Reach out at{" "}
                     <a
                        href="mailto:jigarbhoye04@gmail.com"
                        className="text-blue-500"
                     >
                        jigarbhoye04@gmail.com
                     </a>
                     . Connect on{" "}
                     <Link
                        href="https://linktr.ee/jigarbhoye"
                        className="text-blue-500"
                     >
                        Linktree
                     </Link>{" "}
                     to follow my journey.
                  </p>
               </section>
            </div>
         </div>
      </div>
   );
}
