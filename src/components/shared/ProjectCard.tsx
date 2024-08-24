import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink } from "react-icons/fa";

interface ProjectCardProps {
   title: string;
   subtitle: string;
   description: string[];
   image: string;
   year: string;
   visitLink: string;
   liveLink: string; // New prop for live link
   tags?: string[]; // New prop for tags
}

export default function ProjectCard({
   title,
   subtitle,
   description,
   image,
   year,
   visitLink,
   liveLink,
   tags,
}: ProjectCardProps) {
   return (
      <div className="bg-black rounded-lg overflow-hidden shadow-lg border border-gray-800">
         <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 relative p-3">
               <Image
                  src={image}
                  alt={title}
                  width={700}
                  height={600}
                  objectFit="cover"
                  className="rounded-t-lg md:rounded-l-lg"
               />
            </div>
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
               <div>
                  <div className="flex flex-col md:flex-row md:justify-between mb-2">
                     <h2 className="text-2xl font-bold text-white">{title}</h2>
                     <span className="text-gray-400">{year}</span>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{subtitle}</p>
                  {tags && (
                     <div className="mb-4">
                        <div className="flex flex-wrap mb-2">
                           {tags.map((tag, index) => (
                              <span
                                 key={index}
                                 className="inline-block bg-neutral-950 text-white text-xs px-2 py-1 rounded-md border border-gray-700 mr-2 mb-2"
                              >
                                 {tag}
                              </span>
                           ))}
                        </div>
                        <hr className="border-gray-700" /> {/* Separator line */}
                     </div>
                  )}
                  <ul className="text-gray-300 space-y-2 mt-4">
                     {description.map((item, index) => (
                        <li key={index} className="flex items-start">
                           <span className="mr-2">•</span>
                           <span>{item}</span>
                        </li>
                     ))}
                  </ul>
               </div>
               <div className="mt-4 flex space-x-2">
                  <Link href={visitLink}>
                     <p className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                        <FaGithub className="mr-2" /> Repo
                     </p>
                  </Link>
                  <Link href={liveLink}>
                     <p className="flex items-center bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
                        <FaLink className="mr-2" /> Live
                     </p>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
