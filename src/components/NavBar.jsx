import { useState } from "react";
import { Menu, X, Facebook } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // 🔗 Các section trong trang Home
  const links = [
    { href: "#features", label: "Ưu điểm" },
    { href: "#projects", label: "Bộ sưu tập" },
    { href: "#contact", label: "Liên hệ" },
  ];

  // 🔗 Các trang riêng biệt
  const pageLinks = [
    { to: "/dich-vu", label: "Dịch vụ" },
    { to: "/tin-tuc", label: "Tin tức" },
    { to: "/location", label: "Địa chỉ" },
  ];

  // 🧭 Khi bấm vào section trong Home
  const handleNavClick = (id) => {
    navigate("/"); // quay về Home
    setOpen(false);
    setTimeout(() => {
      const section = document.querySelector(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 400); // đợi Home load rồi mới cuộn
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-gradient-to-r from-black/70 via-gray-900/80 to-black/70 border-b border-yellow-400/30 shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🌟 Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-orange-400 tracking-widest hover:brightness-125 transition-all"
        >
          BIỂN SỐ<span className="text-white"> GIA BẢO</span>
        </Link>

        {/* 🖥️ Menu Desktop */}
        <div className="hidden md:flex gap-10 items-center">
          {/* Các section trong Home */}
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-yellow-300 hover:text-white text-lg font-medium transition group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Các trang riêng */}
          {pageLinks.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              onClick={() => setOpen(false)}
              className="relative text-yellow-300 hover:text-white text-lg font-medium transition group"
            >
              {page.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}

          {/* 🌐 Facebook */}
          <a
            href="https://www.facebook.com/share/1CwLUXSkB8/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-6 text-yellow-300 hover:text-yellow-400 hover:scale-110 transition-transform duration-300"
          >
            <Facebook
              size={26}
              className="drop-shadow-[0_0_8px_rgba(255,215,0,0.4)] hover:drop-shadow-[0_0_12px_rgba(255,215,0,0.7)]"
            />
            <span className="sr-only">Facebook</span>
          </a>
        </div>

        {/* 📱 Nút mở menu mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-yellow-300 hover:text-white transition"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* 📱 Dropdown Mobile */}
      <div
        className={`md:hidden bg-black/90 backdrop-blur-xl transition-all duration-500 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-4 space-y-4">
          {/* Các section trong Home */}
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-yellow-300 hover:text-white text-lg font-semibold tracking-wide transition"
            >
              {link.label}
            </button>
          ))}

          {/* Các trang riêng */}
          {pageLinks.map((page) => (
            <Link
              key={page.to}
              to={page.to}
              onClick={() => setOpen(false)}
              className="text-yellow-300 hover:text-white text-lg font-semibold tracking-wide transition"
            >
              {page.label}
            </Link>
          ))}

          {/* 🌐 Facebook trên Mobile */}
          <a
            href="https://www.facebook.com/share/1CwLUXSkB8/"
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
