'use client';

import { useState } from "react";
import MainFirst from "@/components/mainpage/mainFirst";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FullScreenIntro from "@/components/mainpage/loading";

import "@/styles/global.css";

export default function Home() {
   const [introComplete, setIntroComplete] = useState(false);

   const handleIntroComplete = () => {
      setIntroComplete(true);
   };

   return (
         <main>
         {!introComplete && <FullScreenIntro onComplete={handleIntroComplete} />}
         {/* <div  className={`absolute inset-0 transition-all duration-500 ease-in-out ${
               introComplete 
                  ? "translate-y-0 opacity-100 visible" 
                  : "translate-y-full opacity-0 invisible"
            }`}
         /> */}
            <Header />
            <MainFirst />
            <Footer />
         </main>
   );
}