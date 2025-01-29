import './App.css'
import { Nav } from './components/Nav'
import ParticlesComponent from './components/Particles'
import img from '../src/assets/img/header-img.jpg'
import { Banner } from './components/Banner'
import { BioSection } from './components/BioSection'
import { Skill } from './components/Skill'
import { Portfolio } from './components/Portfolio'
import {Services} from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
 

  return (
    <div
    className="h-screen bg-cover bg-center mix-blend-multiply bg-black bg-opacity-50"
    >
    <Nav />
      <Banner  id='home' className="mt-24" />
      <ParticlesComponent id="particles" />
      <BioSection id='about' className="mt-24" />
      <Skill id='skill' className="mt-24" />
      <Portfolio id='portfolio' className='mt-24'/>
      <Services id="services" className="mt-24" />
      <Contact id="contact" className="mt-24"/>
      <Footer className="mt-24"/>
  </div>
    
  )
}

export default App
