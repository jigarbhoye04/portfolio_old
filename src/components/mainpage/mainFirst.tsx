"use client";

import Image from "next/image";
import Link from "next/link";
import IconsTech from "../shared/IconsTech";

export default function MainFirst() {
   return (
      <div className="w-full flex flex-col md:flex-row items-center justify-center min-h-screen bg-neutral-900 text-gray-300 border-b border-neutral-700">
         {/* <!-- Text Content Div --> */}
         <div className="flex flex-col items-center md:items-start justify-center w-full md:w-1/2 p-8">
            {/* <!-- Text content goes here --> */}
            <div className="max-w-2xl text-left">
               <h1 className="text-3xl font-bold mb-2 text-yellow-200">
                  Hi 👋, I&apos;m Jigar Bhoye
               </h1>
               <p className="text-lg mb-4">
                  Passionate developer studying at{" "}
                  <span className="font-semibold">Nirma University</span>. I
                  love web development, data structures, and exploring new
                  technologies.
               </p>

               <section className="mb-6">
                  <h2 className="text-xl font-bold mb-2 text-green-400">
                     Current Focus
                  </h2>
                  <p className="text-md">
                     Deep diving into web development and building efficient,
                     scalable applications with modern tools.
                  </p>
               </section>

               <section className="mb-6">
                  <h2 className="text-xl font-bold mb-2 text-sky-200">Tech Skills</h2>{" "}
                  <IconsTech />
               </section>

               <section>
                  <h2 className="text-xl font-bold mb-2">Contact Me</h2>
                  <p className="text-md">
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

         {/* <!-- Image Div --> */}
         <div className="flex items-center justify-center w-full md:w-1/2 p-8">
            <Image
               src="/vvg.jpg"
               className="about-page-image w-full max-w-2xl rounded-lg"
               alt="Profile Picture"
               width={300}
               height={300}
               priority
            />
         </div>
      </div>
   );
}
