import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "Giới thiệu" },
    { href: "#features", label: "Ưu điểm" },
    { href: "#projects", label: "Bộ sưu tập" },
    { href: "#contact", label: "Liên hệ" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-black/70 via-gray-900/80 to-black/70 border-b border-yellow-400/30 shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 tracking-widest hover:brightness-125 transition-all"
        >
          BIỂN SỐ<span className="text-white"> GIA BẢO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-yellow-300 hover:text-white text-lg font-medium transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}

          {/* Facebook Icon */}
          <a
            href="https://facebook.com/yourprofile" // 🔗 đổi link Facebook ở đây
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-yellow-300 hover:text-yellow-400 hover:scale-110 transition-transform duration-300 relative"
          >
            <Facebook size={26} className="drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]" />
            <span className="sr-only">Facebook</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-300 hover:text-white transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-yellow-300 hover:text-white text-lg font-semibold tracking-wide transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          {/* Facebook link on mobile */}
          <a
            href="https://facebook.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition"
            onClick={() => setOpen(false)}
          >
            <Facebook size={22} />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
