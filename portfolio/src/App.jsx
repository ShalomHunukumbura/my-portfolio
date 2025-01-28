import './App.css'
import { Nav } from './components/Nav'
import ParticlesComponent from './components/Particles'
import img from '../src/assets/img/header-img.jpg'
import { Banner } from './components/Banner'
import { BioSection } from './components/BioSection'
import { Skill } from './components/Skill'

function App() {
 

  return (
    <div
    class="h-screen bg-cover bg-center mix-blend-multiply bg-black bg-opacity-50"
    >
    <Nav />
      <Banner  id='home' class="mt-24" />
      <ParticlesComponent id="particles" />
      <BioSection id='about' class="mt-24" />
      <Skill id='skill' class="mt-24" />
  </div>
    
  )
}

export default App
