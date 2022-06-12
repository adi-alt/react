import React from "react";
// import logo from "./logo.png";
import { useEffect, useState } from "react";
import "./navbar.css";
function Navbar() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow1(true);
      } else {
        setShow1(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);
  const scrollToTop = () => 
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  return (
    <div className="cooon">
      <div className={`navbar-con ${show && "nav-black"}`}>
        <div className="con1">
          <a >
          <img className="img1" src="https://media3.giphy.com/media/KFnSuizdGVCtkVFOXM/source.gif" onClick={scrollToTop}/>
          </a>
          
        </div>
        <img
          className="img2"
          src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
        />
        {/* <input type="text" /> */}
      </div>
      <div className={show1 && "base1"}></div>
    </div>
  );
}
export default Navbar;
