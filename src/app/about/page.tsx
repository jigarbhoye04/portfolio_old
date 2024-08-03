'use client';

import Link from "next/link";
import Image from "next/image";
import Header from "@/components/shared/Header";
import "@/components/ui/about.css";
import { useTheme } from "next-themes";

export default function AboutPage() {
  const { theme } = useTheme();

  return (
    <>
      <Header />
      <div className={`flex flex-col items-center justify-center min-h-screen w-full ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-800'} overflow-y-scroll pt-10 pb-20`}>
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Content Soon!!</h1>
        </div>
      </div>
      {/* <div className="navBarFiller bg-gray-100 h-2"></div>
      <div className="flex items-center justify-center w-full bg-gray-100">
        <h1 className="text-1xl pb-8 text-gray-100">Made with by Jigar</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800 pt-10 pb-20 overflox-x-hidden overflow-y-scroll w-full">
         <Image
            src="/cat.jpg"
            className="about-page-image w-full h-auto rounded-full"
            alt="Profile Picture"
            width={300}
            height={300}
            priority
          />
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold mb-4">Hi 👋, I&apos;m Jigar Bhoye</h1>
          <p className="text-xl mb-6">
            I&apos;m a passionate developer studying at{" "}
            <span className="font-semibold">Nirma University</span>, with a
            strong interest in web development and data structures and
            algorithms (DSA). I love exploring new technologies and
            continuously improving my skills.
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">What I&apos;m Currently Learning</h2>
            <p className="text-lg mb-4">
              Currently, I&apos;m diving deep into web development and DSA. I&apos;m
              learning how to build efficient and scalable web applications
              using modern tools and frameworks. My goal is to write clean,
              maintainable code and develop solutions that solve real-world
              problems.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Languages and Tools</h2>
            <div className="flex justify-center flex-wrap space-x-4">
              <span className="tech-icon">🌐 JavaScript</span>
              <span className="tech-icon">⚛️ React</span>
              <span className="tech-icon">🚀 Next.js</span>
              <span className="tech-icon">🎨 CSS</span>
              <span className="tech-icon">📊 Node.js</span>
              <span className="tech-icon">💻 Git</span>
              <span className="tech-icon">🔍 DSA</span>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Hobbies and Interests</h2>
            <p className="text-lg mb-4">
              When I&apos;m not coding, I enjoy reading tech blogs, exploring open
              source projects, and participating in hackathons. I&apos;m also an
              avid gamer and enjoy playing strategy games in my free time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-lg mb-4">
              Feel free to reach out to me at{" "}
              <a href="mailto:jigarbhoye04@gmail.com" className="text-blue-500">
                jigarbhoye04@gmail.com
              </a>
              . I&apos;m always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions.
            </p>
            <p className="text-lg">
              Connect with me on{" "}
              <Link href="https://linktr.ee/jigarbhoye" className="text-blue-500">
                Linktree
              </Link>{" "}
              to follow my journey.
            </p>
          </section>
        </div>
      </div> */}
    </>
  );
}