'use client';

import Link from "next/link";
import Header from "@/components/shared/Header";
import "@/components/ui/about.css";
import { useTheme } from "next-themes";


export default function ProjectsPage() {
  const { theme } = useTheme();
  return (
    <>
      <Header />
      <div className={`flex flex-col items-center justify-center min-h-screen w-full bg-neutral-900 text-gray-100 overflow-y-scroll`}>
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Content Soon!!</h1>
        </div>
      </div>
    </>
  );
}
