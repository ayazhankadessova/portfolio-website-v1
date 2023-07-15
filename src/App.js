import './App.css'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Certificates from './components/certificates/Certificates'
import Awards from './components/awards/Awards'

function App() {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Experience />
      <Portfolio />
      <Certificates />
      <Awards />
      <Contact />
      <Footer />
    </>
  )
}

export default App
