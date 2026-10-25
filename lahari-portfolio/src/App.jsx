import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Strengths from './components/Strengths.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Certifications from './components/Certifications.jsx'
import Approach from './components/Approach.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Strengths />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Approach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
