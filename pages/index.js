
import About from '../components/About'
import Advantage from '../components/Advantage'
import HomeMain from '../components/HomeMain'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'
import Service from '../components/Service'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <HomeMain/>
      <About />
      <Service />
      <Portfolio />
      <Advantage />
    </div>
  )
}
