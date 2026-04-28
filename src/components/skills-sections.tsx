"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { RotateCcw } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiSupabase,
  SiClerk,
  SiExpo,
  SiDocker,
  SiTailwindcss,
  SiRedis,
  SiExpress,
  SiGithub,
  SiFigma,
  SiPostgresql,
  SiSocketdotio,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { VscDatabase } from "react-icons/vsc"; 
import { GiBearFace } from "react-icons/gi";
import { FaAws, FaPython, FaJava } from "react-icons/fa";

type Skill = {
  name: string;
  icon: React.ElementType;
  color: string;
};

const skills: Skill[] = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Java", icon: FaJava, color: "#007396" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Clerk", icon: SiClerk, color: "#6C47FF" },
  { name: "React Native", icon: TbBrandReactNative, color: "#61DAFB" },
  { name: "Expo", icon: SiExpo, color: "#000020" },
  { name: "BullMQ", icon: VscDatabase, color: "#000000" }, 
  { name: "Drizzle ORM", icon: VscDatabase, color: "#C5F74F" },
  { name: "Zustand", icon: GiBearFace, color: "#4B32C3" }, 
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Express.js", icon: SiExpress, color: "#000000" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Socket.io", icon: SiSocketdotio, color: "#010101" },
  { name: "Shadcn UI", icon: SiShadcnui, color: "#000000" },
];

const SkillBadge = ({ skill, containerRef }: { skill: Skill; containerRef: React.RefObject<HTMLDivElement> }) => {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileHover={{ scale: 1.05, zIndex: 10 }}
      whileTap={{ scale: 0.95, zIndex: 10 }}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-dashed border-gray-300 dark:border-gray-700 dark:bg-zinc-950 rounded-[0.5rem] shadow-[0_1px_2px_rgba(0,0,0,0.05)] cursor-grab active:cursor-grabbing hover:shadow-md transition-all relative"
    >
      <skill.icon className="w-3.5 h-3.5 shrink-0" style={{ color: skill.color }} />
      <span className="text-[13px] font-medium text-black dark:text-gray-100 whitespace-nowrap select-none">
        {skill.name}
      </span>
    </motion.div>
  );
};

export function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [resetKey, setResetKey] = useState(0);

  return (
    <div className="relative w-full flex flex-col gap-y-3">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">Skills</h2>
          <button
            onClick={() => setResetKey((prev) => prev + 1)}
            className="p-1 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-800 transition-colors"
            title="Reset positions"
            aria-label="Reset positions"
          >
            <RotateCcw strokeWidth={2.5} className="w-4 h-4" />
          </button>
        </div>
        
        {/* Drag me hint with curved arrow using SVG */}
        <div className="relative mr-4 h-10 w-24 flex items-center justify-center opacity-70 hidden sm:flex">
          <span className="text-[11px] italic absolute top-0 right-4 text-gray-500 dark:text-gray-400 rotate-[-5deg]">
            drag me!
          </span>
          <svg className="absolute top-4 right-0 w-12 h-6 text-gray-400 dark:text-gray-500" viewBox="0 0 100 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 3">
            <path d="M90 10 Q50 10 10 40" />
            <path d="M10 40 L25 35 M10 40 L15 25" strokeDasharray="0" />
          </svg>
        </div>
      </div>

      {/* Draggable Area constraint container */}
      <div ref={containerRef} className="relative z-10 flex flex-wrap justify-start gap-2 max-w-full">
        {skills.map((skill) => (
          <SkillBadge key={`${skill.name}-${resetKey}`} skill={skill} containerRef={containerRef} />
        ))}
      </div>
    </div>
  );
}
