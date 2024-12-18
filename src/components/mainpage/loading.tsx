'use client';

import { useState, useEffect, useCallback } from "react";

const greetings = [
   "Hello",
   "Hola",
   "નમસ્તે", 
   "Bonjour",
   "Ciao",
   "नमस्ते",
   "こんにちは",
   "안녕하세요",
   "你好",
];

export default function FullScreenIntro({
   onComplete,
}: {
   onComplete: () => void;
}) {
   const [currentIndex, setCurrentIndex] = useState(0);
   const [isVisible, setIsVisible] = useState(true);
   const [isSliding, setIsSliding] = useState(false);

   const nextGreeting = useCallback(() => {
      setIsVisible(false);
      setTimeout(() => {
         setCurrentIndex((prevIndex) => (prevIndex + 1) % greetings.length);
         setIsVisible(true);
      }, 300);
   }, []);

   useEffect(() => {
      const hasRunOnce = sessionStorage.getItem('hasRunOnce');

      if (hasRunOnce && currentIndex === greetings.length - 1) {
         onComplete();
         return;
      }

      if (currentIndex === greetings.length - 1) {
         sessionStorage.setItem('hasRunOnce', 'true');
      }

      if (currentIndex < greetings.length - 1) {
         const interval = setInterval(nextGreeting, 200);

         return () => clearInterval(interval);
      } else {
         setTimeout(() => {
            setIsSliding(true);
            setTimeout(onComplete, 500);
         }, 1000);
      }
   }, [currentIndex, nextGreeting, onComplete]);

   return (
      <div 
         className={`fixed inset-0 flex items-center justify-center bg-neutral-900 text-white transition-transform duration-500 ease-in-out ${
            isSliding ? "translate-y-full " : "translate-y-0"
         }`}
      >
         <div
            className={`text-4xl font-bold transition-opacity duration-300 ${
               isVisible ? "opacity-100" : "opacity-0"
            }`}
         >
            {greetings[currentIndex]}
         </div>
      </div>
   );
}