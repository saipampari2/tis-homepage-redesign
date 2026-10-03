import { useTheme } from './hooks/useTheme'
import CustomCursor from './components/animation/CustomCursor'
import ScrollProgress from './components/animation/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Marquee from './components/ui/Marquee'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import CampusStats from './components/sections/CampusStats'
import Sports from './components/sections/Sports'
import Recognition from './components/sections/Recognition'
import Community from './components/sections/Community'
import Testimonials from './components/sections/Testimonials'
import Enquire from './components/sections/Enquire'

export default function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <CustomCursor />
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <CampusStats />
        <Sports />
        <Recognition />
        <Community />
        <Testimonials />
        <Enquire />
      </main>
      <Footer />
    </>
  )
}
