"use client";

import type { AnimationItem } from "lottie-web";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaDatabase,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNpm } from "react-icons/si";

type SkillProps = {
  icon: React.ReactNode;
  label: string;
};

export default function Home() {
  const [animationData, setAnimationData] = useState<AnimationItem | null>(null);

  useEffect(() => {
    fetch("/girl-working.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  const Skill = ({ icon, label }: SkillProps) => (
    <div className="flex flex-col items-center gap-2">
      <div className="text-5xl">{icon}</div>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );

  return (
    <div className="dark:bg-gray-900 dark:text-white transition-colors duration-500">
      {/* Hero Section */}
      <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-10 py-24 gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl font-bold text-pink-400 mb-4">
              HI ALL, I&apos;M <span className="text-pink-300">NAHLA 👋</span>
            </h1>
            <p className="text-white text-lg leading-relaxed">
              Passionate computer science student with a love for technology and
              building creative digital experiences. I&apos;m currently learning AI, web
              development, and always exploring new things.
            </p>

            <a
              href="#"
              className="inline-block mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Download My Resume
            </a>
          </div>

          <div className="w-[320px] h-[320px] rounded-full shadow-2xl ring-4 ring-pink-400 p-2 bg-white dark:bg-gray-800 flex items-center justify-center">
            {animationData && (
              <Lottie
                animationData={animationData}
                loop={true}
                className="rounded-full"
              />
            )}
          </div>
        </div>
      </div>

      {/* Divider between nav and about */}
      <div className="border-t border-pink-500"></div>

      {/* Skills Section */}
      <section id="skills" className="bg-gray-800 py-20 px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-4">
          What I Do
        </h2>
        <p className="text-xl font-semibold text-gray-300 mb-12">
          A BEGINNER DEVELOPER WHO LOVES EXPLORING TECH 🤓
        </p>

        <div className="flex flex-wrap justify-center gap-10 text-pink-300 text-xl">
          <Skill icon={<FaHtml5 />} label="HTML 5" />
          <Skill icon={<FaCss3Alt />} label="CSS" />
          <Skill icon={<SiTailwindcss />} label="Tailwind CSS" />
          <Skill icon={<FaJs />} label="JavaScript" />
          <Skill icon={<FaReact />} label="React JS" />
          <Skill icon={<SiNextdotjs />} label="Next JS" />
          <Skill icon={<FaNodeJs />} label="Node JS" />
          <Skill icon={<SiNpm />} label="Npm JS" />
          <Skill icon={<FaDatabase />} label="SQL Database" />
          <Skill icon={<FaPhp />} label="PHP" />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="bg-gray-700 py-20 px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-300 mb-8">
          My Education
        </h2>

        <div className="max-w-4xl mx-auto flex flex-col gap-6 text-left text-gray-200">
          <div className="bg-gray-900 p-6 rounded-xl shadow-md border-l-4 border-pink-400">
            <h3 className="text-xl font-bold text-pink-400">
              Preparatory Studies – Higher School of Computer and Digital Sciences
            </h3>
            <p className="text-sm mt-2">
              Completed two years of preparatory classes focusing on math, algorithms,
              and electronics.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-gray-800 py-20 px-8 text-center text-gray-200"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-pink-400 mb-6">
          Let&apos;s Connect 💬
        </h2>
        <p className="text-lg mb-6">
          Feel free to reach out to me via email or LinkedIn!
        </p>

        <div className="flex justify-center gap-6 text-2xl text-pink-300">
          <a
            href="mailto:saadinahla6@gmail.com"
            className="hover:text-white transition"
            target="_blank"
          >
            <FaEnvelope className="inline mr-2" />
            saadinahla6@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/nahla-saadi-384605259/"
            className="hover:text-white transition"
            target="_blank"
          >
            <FaLinkedin className="inline mr-2" />
            LinkedIn
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center text-sm py-6 text-white font-medium">
        © {new Date().getFullYear()} Nahla Saadi. All rights reserved.
      </footer>
    </div>
  );
}
