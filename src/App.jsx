import NavBar from './components/NavBar'
import ProgressBar from './components/ProgressBar'
import ScrollTop from './components/ScrollTop'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <ProgressBar />
      <NavBar />
      <main>
        <Hero />
        <About />
        <Features />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
