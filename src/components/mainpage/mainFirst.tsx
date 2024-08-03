

"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function MainFirst() {
   const { theme } = useTheme();

   return (
      <div className={`flex flex-col items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} w-full`}>
         <div className="max-w-2xl text-center">
            <h1 className="text-3xl font-bold mb-2">
               Hi 👋, I&apos;m Jigar Bhoye
            </h1>
            <p className="text-lg mb-4">
               Passionate developer studying at{" "}
               <span className="font-semibold">Nirma University</span>. I
               love web development, data structures, and exploring new
               technologies.
            </p>

            <section className="mb-6">
               <h2 className="text-xl font-bold mb-2">Current Focus</h2>
               <p className="text-md">
                  Deep diving into web development and building efficient,
                  scalable applications with modern tools.
               </p>
            </section>

            <section className="mb-6">
               <h2 className="text-xl font-bold mb-2">Tech Skills</h2>
               <div className="flex justify-center flex-wrap space-x-2">
                  <span className={`tech-icon ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>🌐 JavaScript</span>
                  <span className={`tech-icon ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>⚛️ React</span>
                  <span className={`tech-icon ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>🚀 Next.js</span>
                  <span className={`tech-icon ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>🎨 CSS</span>
                  <span className={`tech-icon ${theme === 'dark' ? 'text-gray-400' : 'text-gray-700'}`}>📊 Node.js</span>
               </div>
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
   );
}


// import Image from "next/image";
// import Link from "next/link";
// import { Code } from "lucide-react";

// export default function MainFirst() {
//    return (
//       <>
//          <div className="flex mt-8 border border-white">
//             <Image
//                className="dark:invert"
//                src="/mylg.png"
//                alt="Next.js Logo"
//                width={180}
//                height={37}
//                priority
//             />
//          </div>
//          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 w-full">
//             <div className="max-w-2xl text-center">
//                <h1 className="text-3xl font-bold mb-2">
//                   Hi 👋, I&apos;m Jigar Bhoye
//                </h1>
//                <p className="text-lg mb-4">
//                   Passionate developer studying at{" "}
//                   <span className="font-semibold">Nirma University</span>. I
//                   love web development, data structures, and exploring new
//                   technologies.
//                </p>

//                <section className="mb-6">
//                   <h2 className="text-xl font-bold mb-2">Current Focus</h2>
//                   <p className="text-md">
//                      Deep diving into web development and building efficient,
//                      scalable applications with modern tools.
//                   </p>
//                </section>

//                <section className="mb-6">
//                   <h2 className="text-xl font-bold mb-2">Tech Skills</h2>
//                   <div className="flex justify-center flex-wrap space-x-2">
//                      <span className="tech-icon">🌐 JavaScript</span>
//                      <span className="tech-icon">⚛️ React</span>
//                      <span className="tech-icon">🚀 Next.js</span>
//                      <span className="tech-icon">🎨 CSS</span>
//                      <span className="tech-icon">📊 Node.js</span>
//                   </div>
//                </section>

//                <section>
//                   <h2 className="text-xl font-bold mb-2">Contact Me</h2>
//                   <p className="text-md">
//                      Reach out at{" "}
//                      <a
//                         href="mailto:jigarbhoye04@gmail.com"
//                         className="text-blue-500"
//                      >
//                         jigarbhoye04@gmail.com
//                      </a>
//                      . Connect on{" "}
//                      <Link
//                         href="https://linktr.ee/jigarbhoye"
//                         className="text-blue-500"
//                      >
//                         Linktree
//                      </Link>{" "}
//                      to follow my journey.
//                   </p>
//                </section>
//             </div>
//          </div>

//          <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-3 lg:text-left">
//             <a
//                href="/about"
//                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                // target="_blank"
//                rel="noopener noreferrer"
//             >
//                <h2 className="mb-3 text-2xl font-semibold">
//                   About Me{" "}
//                   <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                      -&gt;
//                   </span>
//                </h2>
//                <p className="m-0 max-w-[30ch] text-md opacity-50">
//                   About me and my journey so far!
//                </p>
//             </a>

//             <a
//                href="/projects"
//                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                // target="_blank"
//                rel="noopener noreferrer"
//             >
//                <h2 className="mb-3 text-2xl font-semibold">
//                   Projects{" "}
//                   <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                      -&gt;
//                   </span>
//                </h2>
//                <p className="m-0 max-w-[30ch] text-md opacity-50">
//                   Explore my projects and contributions!
//                </p>
//             </a>

//             <a
//                href="https://linktr.ee/jigarbhoye"
//                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
//                // target="_blank"
//                rel="noopener noreferrer"
//             >
//                <h2 className="mb-3 text-2xl font-semibold">
//                   Contact Me{" "}
//                   <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
//                      -&gt;
//                   </span>
//                </h2>
//                <p className="m-0 max-w-[30ch] text-md opacity-50">
//                   Get in touch with me!
//                </p>
//             </a>
//          </div>
//       </>
//    );
// }

