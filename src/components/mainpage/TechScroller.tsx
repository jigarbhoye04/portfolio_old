'use client';

import React from 'react';
import { FaJsSquare, FaReact, FaCss3Alt, FaNodeJs, FaPython, FaJava, FaHtml5 } from "react-icons/fa";
import { SiNextdotjs, SiCplusplus, SiTypescript, SiTailwindcss } from "react-icons/si";

const techItems = [
  { icon: <FaReact className="w-6 h-6 text-blue-400" />, label: 'React' },
  { icon: <SiNextdotjs className="w-6 h-6 text-black" />, label: 'Next.js' },
  { icon: <FaJsSquare className="w-6 h-6 text-yellow-500" />, label: 'JavaScript' },
  { icon: <FaCss3Alt className="w-6 h-6 text-blue-500" />, label: 'CSS' },
  { icon: <FaNodeJs className="w-6 h-6 text-green-500" />, label: 'Node.js' },
  { icon: <SiCplusplus className="w-6 h-6 text-blue-700" />, label: 'C++' },
  { icon: <FaPython className="w-6 h-6 text-yellow-500" />, label: 'Python' },
  { icon: <FaJava className="w-6 h-6 text-red-600" />, label: 'Java' },
  { icon: <SiTypescript className="w-6 h-6 text-blue-600" />, label: 'TypeScript' },
  { icon: <FaHtml5 className="w-6 h-6 text-orange-500" />, label: 'HTML' },
  { icon: <FaCss3Alt className="w-6 h-6 text-blue-500" />, label: 'CSS' },
  { icon: <SiTailwindcss className="w-6 h-6 text-teal-500" />, label: 'Tailwind CSS' },
];

const TechScroller = () => {
  return (
    <div className="w-full max-w-3xl relative overflow-hidden bg-black py-4">
      <div className="whitespace-nowrap flex items-center overflow-auto no-scrollbar">
        {techItems.map((item, index) => (
          <div key={index} className="inline-flex items-center space-x-2 text-gray-400 mx-4">
            {item.icon}
            <span className="text-lg">{item.label}</span>
          </div>
        ))}
        {/* Repeat items to ensure continuous scrolling */}
        {techItems.map((item, index) => (
          <div key={index + techItems.length} className="inline-flex items-center space-x-2 text-gray-400 mx-4">
            {item.icon}
            <span className="text-lg">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechScroller;
