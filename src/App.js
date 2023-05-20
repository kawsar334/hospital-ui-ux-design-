import logo from './logo.svg';
import './App.css';
import { doctorsItems, slideItems } from './api/items';
import { products, servicesItems } from './api/products';
import Home from './pages/home/Home';
import { Route, Routes  } from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Doctors from './components/doctors/Doctors';
import DoctorDetails from './pages/doctorDetails/DoctorDetails';
import Products from './pages/products/Products';
import ProductDetails from './pages/productDetails/ProductDetails';
import ServiceDetails from './pages/serviceDetails/Services';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctordetails/:id' element={<DoctorDetails/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
       <Route path='/productdetails/:id' element={<ProductDetails/>}/>
       <Route path='/servicedetails/:id' element={<ServiceDetails/>}/>
    </Routes>
      
      </div>
  );
};

export default App;
