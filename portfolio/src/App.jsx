import './App.css'
import { Nav } from './components/Nav'
import ParticlesComponent from './components/Particles'
import img from '../src/assets/img/header-img.jpg'
import { Banner } from './components/Banner'
function App() {
 

  return (
    <div
    class="h-screen bg-cover bg-center mix-blend-multiply bg-black bg-opacity-50"
    >
    <Nav />
    <Banner/>
    <ParticlesComponent id="particles" />
  </div>
    
  )
}

export default App
