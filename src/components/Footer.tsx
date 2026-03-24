import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(245,158,11,0.28)] py-10">
      <div className="section-shell flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="text-lg tracking-[0.28em] text-[#f5d17b]">NP</p>
          <p className="mt-2 text-sm text-zinc-500">
             DevOps portfolio.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/NikhilPandey78"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-zinc-500 transition-colors duration-300 hover:text-[#f5d17b]"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikhil-kumar-pandey-3a5b8637a"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-500 transition-colors duration-300 hover:text-[#f5d17b]"
          >
            <Linkedin size={18} />
          </a>
        </div>

        <p className="text-sm text-zinc-600">
          © {new Date().getFullYear()} Nikhil Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
