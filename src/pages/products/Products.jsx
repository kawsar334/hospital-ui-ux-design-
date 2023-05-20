

import { Link } from "react-router-dom"
import { products } from "../../api/products"
import Footer from "../../components/footer/Footer"
import Navbar from "../../components/navbar/Navbar"
import "./products.scss"
const Products = ()=>{
    return (
      <div className="products">
        <Navbar />
        <div  className="productwrapper">
          <div className="produttop">
            {/* <a href="/">Home</a> */}
          </div>
          <div className="productbottom">
            {products.map((item) => (
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
        </div>

        <Footer />
      </div>
    );
}


export default Products