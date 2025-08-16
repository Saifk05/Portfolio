export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 text-center text-sm text-white/70 space-y-2">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="mailto:kalkerisaif@gmail.com"
            className="hover:text-cyan-400 transition-colors"
          >
            kalkerisaif@gmail.com
          </a>
          <span className="hidden sm:inline">•</span>
          <a
            href="https://www.linkedin.com/in/saifalikalkeri"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">Saifali Kalkeri</span>. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
