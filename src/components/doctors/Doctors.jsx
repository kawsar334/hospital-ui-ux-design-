import { Link } from "react-router-dom"
import { doctorsItems } from "../../api/items"
import "./doctors.scss"

const Doctors = () => {
  return (
    <div className='dorctors' id='doctors'>
        <h1>Our Doctors</h1>
        <div className="doctorswrapper">
            {doctorsItems.slice(0, 8).map((item)=>(

                <Link to={`/doctordetails/${item.id}`} className="doctorsitem" key={item.id}>
                <img src={item.img ||"https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600"} alt="Loading..." className="doctorImg" />
                <div className="doctorcontent">
                    <span className="name">{item.name}</span>
                    <p>{item.title.slice(0, 25)} ...</p>
                    <span className="cat"> {item.categorie}</span>
                    <button className="seemorebtn">See more</button>
                </div>
            </Link>
                ))}
        </div>
    </div>
  )
}

export default Doctors