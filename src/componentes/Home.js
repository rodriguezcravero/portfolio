import React, { Fragment, useEffect } from "react";
import { useState } from "react";

const Home = () => {
  const [texto, setTexto] = useState("");
  let str = "hola mundo";
  let str2 = "";
  let num = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(num);
      str2 += str[num++];
      console.log(str2);
      setTexto(str2);
      if (num == 10) clearInterval(interval);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Fragment>
      <div className="foto text-center"></div>
      <div className="bio">
        <h2>Ignacio Rodríguez Cravero</h2>
        <p>{texto}</p>
        <div className="iconos">
          <i className="fab fa-html5"> {"\u00A0"} </i>
          <i className="fab fa-css3-alt"> {"\u00A0"} </i>
          <i className="fab fa-bootstrap"> {"\u00A0"} </i>
          <i className="fab fa-react"> {"\u00A0"} </i>
          <i className="fas fa-database"> {"\u00A0"} </i>
          <i className="fab fa-cuttlefish"> {"\u00A0"} </i>
          <i className="fas fa-hashtag"> {"\u00A0"} </i>
          <i className="fab fa-java"> {"\u00A0"} </i>
          <i className="fab fa-github"> {"\u00A0"} </i>
          <i className="fas fa-language"> {"\u00A0"} </i>
        </div>
        <br />
        <h3 className="descargaCV">
          <a
            href="https://drive.google.com/file/d/1VRG2_YIPEfOLvJuWxtl9F5tRvOH6TzvK/view?usp=sharing"
            target="_blank"
            id="cv"
          >
            <span className="subrayado"> Ver Curriculum en PDF</span>
          </a>
        </h3>
        <br />
      </div>
    </Fragment>
  );
};

export default Home;
