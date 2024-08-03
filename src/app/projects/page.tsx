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
      <div className={`flex flex-col items-center justify-center min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} overflow-y-scroll pt-10 pb-20`}>
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Content Soon!!</h1>
        </div>
      </div>
    </>
  );
}
