import { useState } from "react"
import { Link } from "react-router-dom"
import { doctorsItems } from "../../api/items"
import "./doctors.scss"

const Doctors = () => {

  const [currentPage , setCurentPage] = useState(Math.ceil(1));
  const recordPerpage = 4;
  const lastIndex =  currentPage * recordPerpage
  const firstIndex = lastIndex -recordPerpage;
  const records = doctorsItems.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(doctorsItems.length/recordPerpage);
  const numbers = [...Array(nPages+1).keys()].slice(1);


   //prev page 
  const handleprev=(e)=>{
    e.preventDefault();
    if(currentPage !== firstIndex ){
      setCurentPage(currentPage -1)
    }
  }

  // next page 
  const handleNext =()=>{
    if(currentPage !== lastIndex){
      setCurentPage(currentPage +1)
    }}
 

  // handle current page 
  const handleCurrentPage = (i)=>{
    setCurentPage(i);
  }
  

  return (
    <div className="dorctors" id="doctors">
      <h1>Our Doctors</h1>
      <div className="doctorswrapper">
        {records.map((item) => (
          <Link
            to={`/doctordetails/${item.id}`}
            className="doctorsitem"
            key={item.id}
          >
            <img
              src={
                item.img ||
                "https://images.pexels.com/photos/4167542/pexels-photo-4167542.jpeg?auto=compress&cs=tinysrgb&w=600"
              }
              alt="Loading..."
              className="doctorImg"
            />
            <div className="doctorcontent">
              <span className="name">{item.name}</span>
              <p>{item.title.slice(0, 25)} ...</p>
              <span className="cat"> {item.categorie}</span>
              <button className="seemorebtn">See more</button>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination">
        <button  disabled={currentPage ===1} className="prev" onClick={handleprev}><i class="fa-solid fa-chevron-left"></i></button>
        {numbers.map((i)=>(
          <span key={i} className={`${currentPage === i &&"active"}`} onClick={()=>handleCurrentPage(i)}>{i}</span>

        ))}
        <button disabled={lastIndex ===12} className="next" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      
    </div>
  );
}

export default Doctors


