import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiCplusplus,
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

export default function IconsTech() {
  return (
    <div className="flex flex-row flex-wrap justify-center items-start gap-6">
      {/* Languages */}
      <div className="flex-1 p-4 border border-gray-700 rounded-lg ">
        <h3 className="text-lg font-bold mb-4 text-neutral-300">Languages</h3>
        <hr className="border-gray-700 w-full my-2" />
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FaJsSquare className="w-6 h-6 text-yellow-500" />
            <span className="text-lg text-gray-400">JS</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaPython className="w-6 h-6 text-yellow-500" />
            <span className="text-lg text-gray-400">Python</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiCplusplus className="w-6 h-6 text-blue-700" />
            <span className="text-lg text-gray-400">C++</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaJava className="w-6 h-6 text-red-600" />
            <span className="text-lg text-gray-400">Java</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaHtml5 className="w-6 h-6 text-orange-500" />
            <span className="text-lg text-gray-400">HTML</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaCss3Alt className="w-6 h-6 text-blue-500" />
            <span className="text-lg text-gray-400">CSS</span>
          </div>
        </div>
      </div>

      {/* Frameworks */}
      <div className="flex-1 p-4 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-neutral-300">Frameworks</h3>
        <hr className="border-gray-700 w-full my-2" />
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <FaReact className="w-6 h-6 text-blue-400" />
            <span className="text-lg text-gray-400">React</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiNextdotjs className="w-6 h-6 text-black" />
            <span className="text-lg text-gray-400">Next.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <FaNodeJs className="w-6 h-6 text-green-500" />
            <span className="text-lg text-gray-400">Node.js</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiTypescript className="w-6 h-6 text-blue-600" />
            <span className="text-lg text-gray-400">TypeScript</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiTailwindcss className="w-6 h-6 text-teal-500" />
            <span className="text-lg text-gray-400">Tailwind CSS</span>
          </div>
        </div>
      </div>

      {/* Databases */}
      <div className="flex-1 p-4 border border-gray-700 rounded-lg">
        <h3 className="text-lg font-bold mb-4 text-neutral-300">Databases</h3>
        <hr className="border-gray-700 w-full my-2" />
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <SiMongodb className="w-6 h-6 text-green-500" />
            <span className="text-lg text-gray-400">MongoDB</span>
          </div>
          <div className="flex items-center space-x-2">
            <SiMysql className="w-6 h-6 text-orange-500" />
            <span className="text-lg text-gray-400">MySQL</span>
          </div>
        </div>
      </div>
    </div>
  );
}
