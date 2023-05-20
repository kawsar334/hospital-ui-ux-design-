import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./register.scss";
const Register = () => {
  return (
    <div className="register">
      <Navbar />
      <div className="registerwrapper">
          <h1>Signin</h1>
        <form>
          <div className="formItem">
            <div className="inputitem">
              <label htmlFor="username">username</label>
              <input type="text" placeholder="username" />
            </div>
            <div className="inputitem">
              <label htmlFor="email">Email</label>
              <input type="text" placeholder="email" />
            </div>
            <div className="inputitem">
              <label htmlFor="password">Password</label>
              <input type="text" placeholder="password" />
            </div>
            <div className="inputitem">
              <label htmlFor="address">Address</label>
              <input type="text" placeholder="address" />
            </div>
            
            <div className="inputitem">
              <button >Register </button>
            </div>
          </div>
        </form>
        <p>Already have an account ? <Link to="/login">Login</Link></p>

      </div>
    </div>
  );
};

export default Register;
