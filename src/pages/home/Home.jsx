import "./home.scss"
import Navbar from '../../components/navbar/Navbar'
import Slideer from "../../components/slider/Slideer"
import Doctors from "../../components/doctors/Doctors"
import Services from "../../components/services/Services"
import Footer from "../../components/footer/Footer"
import Contact from "../../components/contact/Contact"

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Slideer/>
        <Doctors/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home