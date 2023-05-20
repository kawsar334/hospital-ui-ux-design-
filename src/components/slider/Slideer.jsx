import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss"
import { Navigation } from "swiper";
import { slideItems } from "../../api/items";
const Slideer = () => {
  return (
    <>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {slideItems.map((item)=>(

        <SwiperSlide className="item">
          

            <img src={item.img} alt="loading..."  className="slideImg"/>
            <a href="/" className="slideconten">
            <h1>{item.title}</h1>
            <p>{item.desc}</p>
            <img src="/imgs/logo.png" className="logo" alt="Loading..." />
            <button className="glbbtn">See Now</button>
            </a>
           
        </SwiperSlide>
        ))}
    
      </Swiper>
    </>
  )
}

export default Slideer