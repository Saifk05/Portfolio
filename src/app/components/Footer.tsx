export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black">
      
      {/* subtle top gradient */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-green-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 py-10 text-sm text-white/70">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left — Name + Tagline */}
          <div className="text-center md:text-left">
            <p className="text-white font-medium">
              Saifali Kalkeri
            </p>
            <p className="text-xs text-white/50 mt-1">
              Systems • Real-Time • Scalable Platforms
            </p>
          </div>

          {/* Right — Links */}
          <div className="flex flex-wrap items-center justify-center gap-5">
            <a
              href="mailto:kalkerisaif@gmail.com"
              className="hover:text-green-400 transition-colors"
            >
              Email
            </a>

            <a
              href="https://github.com/Saifk05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/saifalikalkeri"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-white/5 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Saifali Kalkeri. Built with Next.js & Tailwind CSS.
        </div>
      </div>
    </footer>
  );
}