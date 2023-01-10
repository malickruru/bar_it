import React, { useEffect, useRef, useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import {  flexRight, flexRowAround} from "../../Assets/Style/Flex";
import Bouton from "../../Partials/Bouton/Bouton";
import './Header.css'
import { BsList, BsXLg } from "react-icons/bs";

export default function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
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
      <nav className="p-2 header " ref={Header} >
        <div className="container">
          <div className="row">
            <div className="col-sm-3 col-6">
              <Link to="/">
                <img
                className="header-link img"
                  height={60}
                  src="/logo.png"
                />
              </Link>
            </div>
            <div className="col-sm-6 desktop-only " style={flexRowAround}>
              <Link className="header-link" to="/">Notre mission</Link>
              <div className="header-link dropdown position-relative">Services
                <div className="header-dropdown-link">
                  <Link className="link" to="/">Le Bar IT</Link>
                  <Link className="link" to="/SocialBar">Social Bar</Link>
                  <Link className="link" to="/BarInfluence">Bar à Influence</Link>
                </div>
              </div>
              <Link className="header-link" to="/Realisation">Nos réalisations</Link>
            </div>
            <div className="col-sm-3 desktop-only " style={flexRowAround}>
            <a href='#contact'>
              <Bouton text={'Contact'}/>
            </a>
            </div>
            <div className="col-6 mobile-only "  >
              <div onClick={() => {setMenuOpen(!menuOpen)}} className="header-link w-100" style={{fontSize : "30px",...flexRight,}}>
                {menuOpen ? <BsXLg/>  : <BsList/>}
              </div>
            </div>
          </div>
          {
          menuOpen && ( 
          <div className="row">
            <ul className="ul-link">
              <li><Link className="header-link" to="/">Notre mission</Link></li>
              <li><Link className="header-link" to="/SocialBar">Social Bar</Link></li>
              <li><Link className="header-link" to="/BarInfluence">Bar à Influence</Link></li>
              <li><Link className="header-link" to="/Realisation">Nos réalisations</Link></li>
              <li><a className="header-link" href="#contact">Contactez-nous</a></li>
            </ul >
          </div>)
          }
        </div>
      </nav>

      <Outlet />
    </>
  );
}
