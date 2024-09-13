'use client';

import { useState, useEffect } from "react";
import Loading from "@/components/mainpage/loading"; // Your existing Loading component

// DelayedLoading component that waits before showing the loader
export default function DelayedLoading({ delay = 500 }: { delay?: number }) {
   const [showLoading, setShowLoading] = useState(false);

   useEffect(() => {
      const timer = setTimeout(() => {
         setShowLoading(true);
      }, delay); // Set the delay here, default to 500ms

      return () => clearTimeout(timer); // Clear timeout when component unmounts
   }, [delay]);

   // return showLoading ? <Loading /> : null;
}
