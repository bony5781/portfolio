"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        border-b
        border-white/5
        bg-[#050816]/80
        backdrop-blur-xl
      "
    >

      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center">

        {/* FAR LEFT */}
        <div className="flex items-center gap-2">

          {/* Logo */}
          <div
            className="
              text-cyan-400
              font-bold
              text-2xl
              leading-none
            "
          >
            AB
          </div>

          {/* Name */}
          <span className="text-white text-base font-medium">
            Abhinav Bhowmik
          </span>

        </div>

        {/* FAR RIGHT */}
        <div className="ml-auto flex items-center gap-8">

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-8">

            <Link
              href="/"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <a
              href="#about"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#experience"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              className="text-sm text-zinc-300 hover:text-cyan-400 transition"
            >
              Contact
            </a>

          </div>

          {/* Resume Button */}
          <a
            href="/resume.pdf"
            download
            className="
              hidden
              md:flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/50
              px-5
              py-2
              text-sm
              text-white
              transition-all
              duration-300
              hover:bg-cyan-400
              hover:text-black
            "
          >
            Resume

            <span className="text-base">
              ↓
            </span>

          </a>

          {/* MOBILE HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              md:hidden
              flex
              flex-col
              gap-1
            "
          >

            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />
            <span className="w-6 h-[2px] bg-white" />

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div
          className="
            md:hidden
            border-t
            border-white/5
            bg-[#0B1120]
          "
        >

          <div className="flex flex-col gap-5 px-6 py-6">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              Home
            </Link>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#experience"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              Experience
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              Projects
            </a>

            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              Skills
            </a>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 hover:text-cyan-400 transition"
            >
              Contact
            </a>

            {/* Mobile Resume */}
            <a
              href="/resume.pdf"
              download
              className="
                w-fit
                rounded-full
                border
                border-cyan-400/50
                px-5
                py-2
                text-sm
                text-white
                transition-all
                duration-300
                hover:bg-cyan-400
                hover:text-black
              "
            >
              Resume ↓
            </a>

          </div>

        </div>

      )}

    </header>
  );
}