

import { Link } from "react-router-dom"
import { products } from "../../api/products"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./products.scss"
import { useState } from "react"
const Products = ()=>{
  const [currentPage, setCurentPage] = useState(1);
  const recordPerpage = 12;
  const lastIndex =  recordPerpage *currentPage 
  const firstIndex = lastIndex - recordPerpage;
  const records = products.slice(firstIndex, lastIndex)
  const npage = Math.ceil(products.length/recordPerpage);
  const numbers = [...Array(npage +1).keys()].slice(1);

  
  // handle previous page function 
  const handlePrev= ()=>{
      if(currentPage >1){
        setCurentPage(currentPage -1)
      }
  }
// handle next page function
  const handleNext = ()=>{
    if(currentPage !== lastIndex){
      setCurentPage(currentPage +1)
    }
  }


  // handlecurrentPage
  const  handlecurrentPage= (id)=>{
    setCurentPage(id)
  }
    return (
      <div className="products">
        <Navbar />
        <div  className="productwrapper">
          <div className="produttop">
          </div>
          <div className="productbottom">
            {records.map((item) => (
              <Link to={`/productdetails/${item.id}`} className="item">
                <img src={item.img} alt="Loading..." />
                <div className="productcontent">
                  <span className="price">
                    <b>price</b>:${item.price}
                  </span>
                  <span>{item.title.slice(0,10)}</span>
                </div>
              </Link>
            ))}
            
          </div>
          <div className="pagination">
            <button disabled={currentPage ===1} className="prev" onClick={handlePrev}><i className="fa-solid fa-chevron-left"></i></button>
            {numbers.map((i)=>(
              <span className={`${currentPage === i && "active"}`} onClick={()=>handlecurrentPage(i)}>{i}</span>
            ))}
            <button disabled={currentPage === 3} className="next" onClick={handleNext}><i className="fa-solid fa-chevron-right"></i></button>
          </div>
        </div>

        <Footer />
      </div>
    );
}


export default Products