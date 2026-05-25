export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-6 py-24"
    >
      {/* Section Label */}
      <p className="text-cyan-400 uppercase tracking-[0.35em] text-xs font-semibold">
        CONTACT
      </p>

      {/* Heading */}
      <h2 className="mt-5 text-3xl md:text-4xl font-bold tracking-tight">
        Let’s Connect
      </h2>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-zinc-400 text-lg leading-relaxed">
        Open to software development opportunities, collaborative projects,
        and conversations around technology, engineering, and modern web
        applications.
      </p>

      {/* Contact Cards */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Email */}
        <a
          href="mailto:bhowmikabhinav@gmail.com"
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B1120]/80
            p-8
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-[#10182b]
          "
        >

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            EMAIL
          </p>

          <p className="mt-6 text-lg text-zinc-300 break-all">
            bhowmikabhinav@gmail.com
          </p>

        </a>

        {/* GitHub */}
        <a
          href="https://github.com/bony5781"
          target="_blank"
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B1120]/80
            p-8
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-[#10182b]
          "
        >

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            GITHUB
          </p>

          <p className="mt-6 text-lg text-zinc-300 break-all">
            github.com/bony5781
          </p>

        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/abhinav-bhowmik-330347201/"
          target="_blank"
          className="
            rounded-3xl
            border border-white/10
            bg-[#0B1120]/80
            p-8
            transition-all
            duration-300
            hover:border-cyan-400/40
            hover:bg-[#10182b]
          "
        >

          <p className="text-xs uppercase tracking-[0.3em] text-cyan-400">
            LINKEDIN
          </p>

          <p className="mt-6 text-lg text-zinc-300 break-all">
            linkedin.com/in/abhinav-bhowmik-330347201
          </p>

        </a>

      </div>
    </section>
  );
}