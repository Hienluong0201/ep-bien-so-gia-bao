import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ProgressBar from "./components/ProgressBar";
import ScrollTop from "./components/ScrollTop";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Features from "./sections/Features";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import FloatingButtons from "./components/FloatingButtons";

// Trang mới
import Blog from "./pages/Blog";
import Location from "./pages/Location";
import BlogDetail from "./pages/BlogDetail";
function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        <ProgressBar />
        <NavBar />

        <Routes>
          {/* Trang chủ */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <Features />
                <Projects />
                <Contact />
              </main>
            }
          />

          {/* Trang Tin tức */}
          <Route path="/tin-tuc" element={<Blog />} />

          <Route path="/tin-tuc/:slug" element={<BlogDetail />} />

          {/* Trang Địa chỉ */}
          <Route path="/location" element={<Location />} />
        </Routes>

        <Footer />
        <ScrollTop />
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;
