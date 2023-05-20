import "./doctordetails.scss"
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import { useLocation } from "react-router-dom"
import { doctorsItems } from "../../api/items"
import { useEffect, useState } from "react"

const DoctorDetails = () => {
  const id = useLocation().pathname.split("/")[2];
  const [doctor, setDoctor] = useState({})
 
    useEffect(()=>{
       setDoctor(doctorsItems.find((item)=>item.id == id));
    },[doctorsItems]);


  return (
    <div className="doctordetails">
      <Navbar />
      <div className="d_details_wrapper">
        <div className="d_details_left">
          <img src={doctor.img} alt="" />
        </div>
        <div className="d_details_right">
          <h3 className="name">{doctor.name}</h3>
          <p className="title">{doctor.title}</p>
          <p className="doctor">
            <b>{doctor.categorie}</b>
          </p>
          <p className="desc">{doctor.desc}</p>

          <div className="doctorsociallinks">
            <a href={doctor.facebook}>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href={doctor.instragram}>
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href={doctor.twitter}>
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href={doctor.linkdin}>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <button>Book Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DoctorDetails