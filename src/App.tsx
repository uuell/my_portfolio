import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import SocialSidebar from './components/SocialSidebar'
import Hero from "./components/Hero"
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { theme, toggle } = useTheme()

  return (
    <>
      <Navbar theme={theme} toggle={toggle} />
      <SocialSidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </>
  )
}
