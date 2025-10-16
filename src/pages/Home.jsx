import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { Store } from 'lucide-react' 
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Thanh điều hướng trên cùng */}
      <NavBar />

      {/* ✅ Nội dung chính */}
      <Hero />
      {/* ✅ Nút chuyển sang trang cửa hàng */}
      <div className="text-center py-16">
  <Link
    to="/location"
    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-400 text-white text-lg font-semibold px-8 py-4 rounded-full shadow-lg hover:from-blue-500 hover:to-blue-300 transform hover:scale-105 transition-all duration-300"
  >
    <Store className="w-6 h-6" /> 
    <span>Xem cửa hàng</span>
  </Link>
  <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-sm">
    Đến trực tiếp để xem mẫu thật và quy trình ép biển tại chỗ
  </p>
</div>
      <About />
      <Features />
      <Projects />
      <Contact />
      {/* ✅ Footer */}
      <Footer />
    </div>
  )
}
