import NavBar from '../components/NavBar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Features from '../sections/Features'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import FloatingButtons from '../components/FloatingButtons'
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* ✅ Thanh điều hướng trên cùng */}
      <NavBar />

      {/* ✅ Nội dung chính */}
      <Hero />
      <About />
      <Features />
      <Projects />
      <Contact />
      {/* ✅ Footer */}
      <Footer />
      <FloatingButtons />
    </div>
  )
}
