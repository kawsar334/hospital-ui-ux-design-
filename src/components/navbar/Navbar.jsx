import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./navbar.scss";

import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState(true);
  const loacation = useLocation().pathname;
  const path = loacation === "/";
  return (
    <div className="navbar">
      <div className="navwrapper">
        <Link to="/" className="navleft">
          <img src="/imgs/logo.png" alt="Loading..." className="logo" />
          <h1>Labaid Cardiac Hospital</h1>
        </Link>
        {active && (
          <div className="navmiddle">
            <ul>
              { !path && (
                <li>
                  <Link to="/">Home</Link>
                </li>
              )}
              {path && (
                <li>
                  <a href="#doctors">Doctors</a>
                </li>
              )}
              <li>
                <Link to="/products">parmacy</Link>
              </li>
              {path && (
                <li>
                  <a href="#services">services</a>
                </li>
              )}
              {path && (
                <li>
                  <a href="#contact">Contact</a>
                </li>
              )}

              <li>
                <button className="glbbtn" onClick={() => navigate("/login")}>
                  Login
                </button>
              </li>
              <li>
                <button
                  className="glbbtn"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="navright">
        {!active ? (
          <i
            className="fa-solid fa-bars"
            onClick={() => setActive(!active)}
          ></i>
        ) : (
          <i
            className="fa-solid fa-xmark"
            onClick={() => setActive(!active)}
            style={{ color: "crimson" }}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
