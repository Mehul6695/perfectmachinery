import React from "react";
import { Link, NavLink} from "react-router-dom";
import wlogo from '../Customer/image/WhatsApp.svg.webp';
import logo from '../Customer/image/logo.png';

export default function NavbarApp() {
  return (
    <div>
        <div className='whatsapp_main '>
          <a href="https://api.whatsapp.com/send?phone=9558991020&text=Hi,%20I%20want%20to%20Know%20about%20Your%20Product,%20Please%20Contact%20me%20" target="blank"><img src={wlogo} alt="wlogo" className="whatsapp"  /></a> </div>
      <nav className="navbar navbar-expand-lg  fixed-top shadow">
        <div className="container-fluid">
          <Link className="navbar-brand w-50 text-white" to="/">
          Perfect Machinery
          </Link>
          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav text-center ">
              <li className="nav-item">
                <NavLink
                  className="navbar__link   text-white"
                exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" navbar__link text-white" to="/AboutApp" >
                  About
              </NavLink>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="navbar__link dropdown-toggle  text-white"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Product
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink className="dropdown-item" to="/injmol" >
                    Injection Moulding{" "}
                   </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/hypres" >
                      Hydralic Press
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/rubrmc" >
                      Rubber Moulding{" "}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/rotrmc" >
                      Rotery Machine  
                </NavLink>
                  </li>
                  
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                  <NavLink className="dropdown-item" to="/ContectUsApp">
                      Customize your Machinery
                    </NavLink>
                  </li>
                </ul>
              </li>
             
              <li className="nav-item">
                <NavLink className="navbar__link text-white" to="/ContectUsApp" >
                  Contect Us
              </NavLink>
              </li>
              <span className="social ms-5">
                <li className="nav-item">
                  <a
                    className="nav-link text-white bi bi-whatsapp ms-5"
                    href="#"
                  ></a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-white bi bi-facebook ms-2"
                    href="#"
                  ></a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link text-white bi bi-instagram ms-2"
                    href="#"
                  ></a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link text-white bi bi-twitter ms-2"
                    href="#"
                  ></a>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
   
    </div>
  );
}
