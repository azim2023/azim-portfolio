import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="about" className="scroll-mt-16">
          <About />
        </div>
        <div id="skills" className="scroll-mt-16">
          <Skills />
        </div>
        <div id="projects" className="scroll-mt-16">
          <Projects />
        </div>
        <div id="contact" className="scroll-mt-16">
          <Contact />
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App