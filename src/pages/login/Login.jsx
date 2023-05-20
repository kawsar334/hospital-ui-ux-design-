import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
        <Navbar/>
      <div className="loginwrapper">
        <h1>signin</h1>
        <form action="">
          <div className="formitem">
            <label htmlFor="email">Email</label>
            <input type="text" placeholder="Enter email" />
          </div>
          <div className="formitem">
            <label htmlFor="password">password</label>
            <input type="password" placeholder="Enter password" />
          </div>
          <div className="formitem">
            <button>Login </button>
          </div>
        </form>
        <p>
          Don't have any account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
