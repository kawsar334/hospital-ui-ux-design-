import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { products } from '../../api/products'
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import "./productdetails.scss"

const ProductDetails = () => {
    const [data, setData] = useState({});
    const id = useLocation().pathname.split("/")[2];
    useEffect(()=>{
         setData(products.find((i)=>i.id ==id))
         console.log(data)
        
    },[products])
  return (
    <div className="p_details">
      <Navbar />
      <h1>product Details</h1>
      <div className="p_details_wrapper">
        <div className="pdetails_left">
          <img src={data?.img} alt="" />
        </div>
        <div className="pdetails_right">
          <h3>{data.title}</h3>
          <span>
            <b>Price:</b>${data.price}
          </span>
          <div className="counters">
            <button>-</button>
            <button>0</button>
            <button>+</button>
          </div>
          <p className='desc'>{data.desc}</p>
          <button className="addtocartbtn">Add to cart</button>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ProductDetails