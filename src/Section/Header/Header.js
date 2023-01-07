import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { flexRowAround, flexRowCenter } from "../../Assets/Style/Flex";
import Bouton from "../../Partials/Bouton/Bouton";
import './Header.css'

export default function Header() {
  const location = useLocation();
  // const [url, setUrl] = useState(location.pathname);
  const Header = useRef(null)

  useEffect(() => {
      if (location.pathname == "/Realisation") {
        Header.current.style.backgroundColor = '#fff';
        document.querySelectorAll(".header-link").forEach((e) => {
          e.classList.add('light')
        })
      }else{
        Header.current.style.backgroundColor = '#310908b3';
        document.querySelectorAll(".header-link").forEach((e) => {
          e.classList.remove('light')
        })
      }
  });

  
  
  
  return (
    <>
      <nav className="p-2 header position-fixed" ref={Header} >
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <Link to="/">
                <img
                className="header-link img"
                  height={60}
                  src="/logo.png"
                />
              </Link>
            </div>
            <div className="col-sm-6" style={flexRowAround}>
              <Link className="header-link" to="/">Notre mission</Link>
              <div className="header-link dropdown position-relative">Services
                <div className="header-dropdown-link">
                  <Link className="link" to="/">Le Bar IT</Link>
                  <Link className="link" to="/SocialBar">Social Bar</Link>
                  <Link className="link" to="/BarInfluence">Bar a Influence</Link>
                </div>
              </div>
              <Link className="header-link" to="/Realisation">Nos realisations</Link>
            </div>
            <div className="col-sm-3" style={flexRowAround}>
              <Bouton text="contact" />
            </div>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
