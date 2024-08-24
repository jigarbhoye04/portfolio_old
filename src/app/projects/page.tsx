// pages/projects.tsx
"use client";

import Link from "next/link";
import Header from "@/components/shared/Header";
// import "@styles/about.css";
import { useTheme } from "next-themes";
import Head from "next/head";
import ProjectCard from "@/components/shared/ProjectCard";
import { GrProjects } from "react-icons/gr";

interface Project {
   title: string;
   description: string[];
   image: string;
   year: string;
   tags: string[];
   visitLink: string;
    liveLink?: string;
}

const projects: Project[] = [
   {
      title: "Candid Canvas",
      description: [
         "Built-in authentication for secure user access.",
         "Photo upload feature with EXIF data extraction for detailed metadata.",
         "Organize photos efficiently using customizable tags.",
         "Seamless infinite scroll for smooth navigation through your photo collection.",
         "Toggle between light and dark modes to suit your preference.",
         "CMD-K menu for quick photo search and access.",
      ],
      image: "/cc.png",
      year: "2024",
      tags: ["Next.js", "Postgres SQL", "Tailwind CSS", "NextAuth.js"],
      visitLink: "https://github.com/jigarbhoye04/candid-canvas",
      liveLink: "https://candid-canvas.vercel.app/",
   },
   {
      title: "Static Blog",
      description: [
        "Built with Astro for optimal speed and efficiency in web development.",
        "Based on the AstroPaperTheme template with room for enhancements.",
        "Features a fully responsive and accessible design for all devices.",
        "SEO-friendly structure to improve search engine visibility.",
        "Supports light and dark modes for a personalized user experience.",
        "Includes fuzzy search functionality for quick and accurate results.",
        "Offers super fast performance with pagination for better content management.",
        "Provides a sitemap and RSS feed (currently disabled) for better indexing and updates."
      ],      
      image: "/stuff.png",
      year: "2024",
      tags: ["Next.js", "Tailwind CSS", "Astro", "Markdown"],
      visitLink: "https://github.com/jigarbhoye04/paper-blog",
      liveLink: "https://jigarbhoyestuff.vercel.app/",
   },
   {
    title: "Next.js Dashboard App",
    description: [
      "Built with Next.js to provide a dynamic and user-friendly dashboard application.",
      "Features data visualization with various charts and graphs for effective data representation.",
      "Includes task management capabilities with a clean and intuitive interface.",
      "Responsive design ensures compatibility across different devices and screen sizes."
    ],
    image: "/dash.png",
    year: "2024",
    tags: ["Next.js", "Dashboard", "Data Visualization", "Task Management"],
    visitLink: "https://github.com/jigarbhoye04/nextjs-dashboard-app",
    // liveLink: "",
  },  
   // Add more projects here...
];

export default function ProjectsPage() {
   const { theme } = useTheme();
   return (
      <>
         <Header />
         <div className="min-h-screen bg-black text-white">
            <Head>
               <title>My Projects</title>
               <meta name="description" content="View my projects" />
            </Head>

            <main className="container mx-auto px-4 py-8">
               <div className="flex justify-between items-center mb-8">
                  <h1 className="text-4xl font-bold">My Projects</h1>
                  <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                     <GrProjects size={26} className="text-white" />
                  </div>
               </div>
               <div className="space-y-8">
                  {projects.map((project, index) => (
                     <ProjectCard subtitle={""} key={index} {...project} liveLink={project.liveLink || ""} />
                  ))}
               </div>
            </main>
         </div>
      </>
   );
}
