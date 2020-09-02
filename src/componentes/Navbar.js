import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [boo, setBoo] = useState(false);

  const onClick = () => (boo === false ? setBoo(true) : setBoo(false));

  //   document.getElementById("hamburger").addEventListener("click", function () {
  //     this.classNameList.toggle("active");
  //     document.querySelector(".mobile-menu").classNameList.toggle("active");
  //   });

  return (
    <header>
      <nav>
        <img id="svg" src="https://svgshare.com/i/PDe.svg" alt="" />
        <ul id="menu">
          <li>
            <Link to="/portfolio">HOME</Link>
          </li>
          <li>
            <Link to="/proyectos">PROYECTOS</Link>
          </li>
          <li>
            <Link to="/contacto">CONTACTO</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
        </ul>

        <div
          id="hamburger"
          onClick={onClick}
          className={boo === true ? "active" : undefined}
        >
          <div className="line" id="one"></div>
          <div className="line" id="two"></div>
          <div className="line" id="three"></div>
        </div>
      </nav>

      <div className={boo === false ? "mobile-menu" : "mobile-menu active"}>
        <ul className="mobile-menu__items">
          <li>
            <Link to="/portfolio" onClick={onClick}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/proyectos" onClick={onClick}>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="/contacto" onClick={onClick}>
              CONTACTO
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={onClick}>
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
