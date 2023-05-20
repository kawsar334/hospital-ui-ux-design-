

import { Link } from "react-router-dom";
import { servicesItems } from "../../api/products";
import "./services.scss"

const Services = ()=>{
    return (
      <div className="services" id="services">
        <h1>Our services </h1>
        <p>
          Our hospital is a state-of-the-art medical facility that is designed
          to provide the highest quality healthcare services to patients from
          all walks of life. We are equipped with modern medical equipment and
          facilities that enable us to offer a wide range of medical services,
          from routine checkups to specialized treatments.
        </p>
          <hr />

        <div className="serviceswrapper">
          {servicesItems.map((item) => (
            <Link to={`/servicedetails/${item.id}`} className="serviceitem">
              <img
                src={
                  item.img ||
                  "https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600"
                }
                alt="Loading..."
              />
              <div className="servicecontents">
                <span>{item.title}</span>
                <img src="/imgs/logo.png" alt="" className="logo" />
                <button className="servicesbtn">
                  <Link to="/">see more</Link>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
}


export default Services