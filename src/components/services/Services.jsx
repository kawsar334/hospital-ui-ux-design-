

import { Link } from "react-router-dom";
import { servicesItems } from "../../api/products";
import "./services.scss"
import { useState } from "react";

const Services = ()=>{
  const [currentPage, setCurentPage] = useState(1);
  const recordPerpage =4;
  const lastIndex = currentPage * recordPerpage;
  const firstIndex = lastIndex -recordPerpage;
  const records = servicesItems.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(servicesItems.length/recordPerpage);
  const numbers =[ ...Array(nPage+1).keys()].slice(1)


  const handlePrev= ()=>{
    if(currentPage !== firstIndex){
      setCurentPage(currentPage - 1)

    }
  }
  //handling next functionality 
  const handleNext = ()=>{
    if(currentPage !== lastIndex ){
      setCurentPage(currentPage +1)
    }
  }

  //handle change page
  const handlechangPage = (i)=>{
    setCurentPage(i)

  }

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
          {records.map((item) => (
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
       
       <div className="pagination">
              <button className="prev" onClick={handlePrev} disabled={currentPage === 1}><i className="fa-solid fa-chevron-left"/></button>
              {numbers.map((i)=>(
                <span key={i} className={`${currentPage ===i && "active"}`} onClick={()=>handlechangPage(i)}>{i}</span>
              ))}
              <button className="next" onClick={handleNext}  disabled={currentPage === 2}><i className="fa-solid fa-chevron-right"/></button>
       </div>
      </div>
    );
}


export default Services