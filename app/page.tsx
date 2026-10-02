import Navbar from "@/components/layout/Navbar";

import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-[#050816] text-white">

      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Main Gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#0B1733_0%,#050816_55%)]" />

        {/* Right Glow */}
        <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Secondary Glow */}
        <div className="absolute top-[500px] left-[35%] h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <Navbar />

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start min-h-[85vh]">

          {/* LEFT SIDE */}
          <div>
            {/* Immediate Joiner Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-semibold text-cyan-300 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              Immediate Joiner (0-Day Notice)
            </div>

            {/* Intro */}
            <p className="mt-6 text-cyan-400 uppercase tracking-[0.34em] text-[11px] font-semibold">
              hi, my name is
            </p>

            {/* Name */}
            <h1 className="mt-4 text-5xl md:text-7xl font-bold leading-[0.92] tracking-tight">
              Abhinav Bhowmik<span className="text-cyan-400">.</span>
            </h1>

            {/* Role */}
            <h2 className="mt-6 text-2xl md:text-3xl font-medium text-cyan-300">
              Software & Cloud Operations Engineer
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-400">
              Experienced in enterprise cloud infrastructure, L2/L3 technical support, 
              and scalable backend development[cite: 1]. Ex-Accenture & Ex-Amazon with a strong 
              foundation in Java, Python, SQL, Azure, and ServiceNow[cite: 1]. GATE 2026 CS qualified 
              and AZ-900 certified[cite: 1].
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  bg-cyan-400
                  px-7 py-3.5
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-cyan-300
                "
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.02]
                  px-7 py-3.5
                  text-sm
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-white/[0.04]
                "
              >
                Contact Me
              </a>
            </div>

            {/* TECH STACK */}
            <div className="mt-16">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                CORE TECHNOLOGIES & TOOLS
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                {/* Java */}
                <img
                  src="https://skillicons.dev/icons?i=java"
                  alt="Java"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Python */}
                <img
                  src="https://skillicons.dev/icons?i=python"
                  alt="Python"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* SQL / PostgreSQL */}
                <img
                  src="https://skillicons.dev/icons?i=postgres"
                  alt="SQL"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Azure */}
                <img
                  src="https://skillicons.dev/icons?i=azure"
                  alt="Azure"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Docker */}
                <img
                  src="https://skillicons.dev/icons?i=docker"
                  alt="Docker"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* React */}
                <img
                  src="https://skillicons.dev/icons?i=react"
                  alt="React"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Node.js */}
                <img
                  src="https://skillicons.dev/icons?i=nodejs"
                  alt="Node.js"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* MongoDB */}
                <img
                  src="https://skillicons.dev/icons?i=mongodb"
                  alt="MongoDB"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Git */}
                <img
                  src="https://skillicons.dev/icons?i=git"
                  alt="Git"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />

                {/* Linux */}
                <img
                  src="https://skillicons.dev/icons?i=linux"
                  alt="Linux"
                  className="h-10 w-10 transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex justify-center lg:justify-end lg:self-start -mt-6">
            <div
              className="
                relative
                w-full
                max-w-[360px]
                overflow-hidden
                rounded-[2rem]
                border
                border-cyan-400/20
                bg-[#0B1120]
                p-2
                shadow-[0_0_35px_rgba(34,211,238,0.10)]
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-cyan-500/5 blur-2xl" />

              {/* IMAGE */}
              <img
                src="/profile.jpg"
                alt="Abhinav Bhowmik"
                className="
                  relative
                  h-[460px]
                  w-full
                  rounded-[1.6rem]
                  object-cover
                  object-top
                "
              />
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="border-t border-white/5 bg-white/[0.02]"
      >
        <About />
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-t border-white/5"
      >
        <Skills />
      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="border-t border-white/5 bg-white/[0.02]"
      >
        <Projects />
      </section>

      {/* EXPERIENCE */}
      <section
        id="experience"
        className="border-t border-white/5"
      >
        <Experience />
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="border-t border-white/5 bg-white/[0.02]"
      >
        <Contact />
      </section>

    </main>
  );
}
