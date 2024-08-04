import { FaJsSquare, FaReact, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiCplusplus, SiTypescript, SiTailwindcss } from "react-icons/si";

export default function IconsTech() {
  return (
    <div className="flex flex-wrap justify-center space-x-4 space-y-2 text-gray-400">
      <div className="flex items-center space-x-2">
        <FaReact className="w-6 h-6 text-blue-400" />
        <span className="text-lg">React</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiNextdotjs className="w-6 h-6 text-black" />
        <span className="text-lg">Next.js</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaJsSquare className="w-6 h-6 text-yellow-500" />
        <span className="text-lg">JavaScript</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaCss3Alt className="w-6 h-6 text-blue-500" />
        <span className="text-lg">CSS</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaNodeJs className="w-6 h-6 text-green-500" />
        <span className="text-lg">Node.js</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiCplusplus className="w-6 h-6 text-blue-700" />
        <span className="text-lg">C++</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaPython className="w-6 h-6 text-yellow-500" />
        <span className="text-lg">Python</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaJava className="w-6 h-6 text-red-600" />
        <span className="text-lg">Java</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiTypescript className="w-6 h-6 text-blue-600" />
        <span className="text-lg">TypeScript</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaHtml5 className="w-6 h-6 text-orange-500" />
        <span className="text-lg">HTML</span>
      </div>
      <div className="flex items-center space-x-2">
        <FaCss3Alt className="w-6 h-6 text-blue-500" />
        <span className="text-lg">CSS</span>
      </div>
      <div className="flex items-center space-x-2">
        <SiTailwindcss className="w-6 h-6 text-teal-500" />
        <span className="text-lg">Tailwind CSS</span>
      </div>
    </div>
  );
}
