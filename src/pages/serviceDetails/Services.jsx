import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import { servicesItems } from "../../api/products"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./services.scss"


const ServiceDetails= ()=>{
    const id = useLocation().pathname.split("/")[2];

    const [data, setData] =useState({});
    useEffect(()=>{

        setData(servicesItems.find((i)=>i.id === Number(id)));

    },[servicesItems])
    return(
        <>
        <Navbar/>
        <div className="service_details">
            <div className="s_d_wrapper">
                <div className="left">
                <p>{data?.title}</p>
                <img src={data.img} alt="Loading..." />
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}


export default ServiceDetails