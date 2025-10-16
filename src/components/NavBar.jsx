export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 text-yellow-400 flex justify-center gap-8 py-4 backdrop-blur-md z-50">
      <a href="#about" className="hover:text-white transition">Giới thiệu</a>
      <a href="#features" className="hover:text-white transition">Ưu điểm</a>
      <a href="#projects" className="hover:text-white transition">Bộ sưu tập</a>
      <a href="#contact" className="hover:text-white transition">Liên hệ</a>
    </nav>
  )
}
