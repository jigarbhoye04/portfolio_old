"use client";

import React from "react";
import Link from "next/link";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
// import Image from "next/image";
import QButton from "@/components/ui/Button";
import NextUIcard from "@/components/individual/NextUIcard";
import { Poppins } from "next/font/google";

const poppins = Poppins({
   subsets: ["latin"],
   weight: "400",
});

const AboutMePage = () => {
   return (
      <>
         <Header />
         <div
            className={`${poppins.className} m-12 min-h-screen bg-black text-yellow-50 p-81`}
         >
            {/* Header */}
            <header className="mb-12 text-cyan-200">
               <h1 className="text-4xl font-bold mb-2">Hello! I&apos;m Jigar 😎</h1>
               <h2 className="text-2xl font-light">Shaping Digital Perfection!</h2>
            </header>

            <div className="relative">
                  <hr className="border-gray-600" />
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                     <Link href="/contact">
                        <QButton className="inline-block bg-gray-800 text-yellow-50 px-6 py-3 rounded-full hover:bg-gray-700 hover:text-yellow-50 transition">
                           Send a Message →
                        </QButton>
                     </Link>
                  </div>
               </div>

            {/* Main content */}
            <main>
               {/* Introduction */}
               <section className="mb-12 mt-12">
                  <p className="text-lg">
                     As a Software Student, I am dedicated to crafting scalable
                     applications, improving user interactions, and optimizing
                     development processes for greater efficiency.
                  </p>
               </section>

               {/* Skills */}
               <section className="mb-12">
                  <div className="flex justify-center">
                     <h3 className="text-xl text-green-400 font-semibold mb-4 inline-block border-b border-white">
                        I can help you with
                     </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     <SkillCard
                        number="01"
                        title="Design"
                        description="I create intuitive and visually appealing designs that prioritize user experience, ensuring every interaction feels natural and engaging."
                     />
                     <SkillCard
                        number="02"
                        title="Development"
                        description="I develop high-performance websites from the ground up, focusing on responsive layouts and smooth user interactions with modern technologies."
                     />
                     <SkillCard
                        number="03"
                        title="The full package"
                        description="I can make end-to-end development, from frontend to backend, delivering fully integrated solutions that meet business needs and technical requirements."
                     />
                  </div>
               </section>

               <hr className="border-gray-600" />
               
               {/* testing hover card */}
               {/* <NextUIcard /> */}
            </main>
         </div>
         <Footer />
      </>
   );
};

const SkillCard = ({
   number,
   title,
   description,
}: {
   number: string;
   title: string;
   description: string;
}) => (
   <div className="border border-gray-600 p-6 rounded-lg">
      <span className="text-sm text-yellow-50 mb-2 block">{number}</span>
      <hr className="border-gray-600 mb-2" />
      <h4 className="text-xl font-semibold mb-4">{title}</h4>
      <p className="text-yellow-50">{description}</p>
   </div>
);

export default AboutMePage;
