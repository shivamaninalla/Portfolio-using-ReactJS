import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf"
import {themeContext} from '../../Context'
import {useContext } from "react";

const Services = () => {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="services">
      {/* {left side} */}
      <div className="awesome">
        <span style={{color:darkMode? 'white':''}}>My Awesome</span>
        <span>services</span>
        <span>
          Lorem ipsum, dolor sit amet c a voluptatum non doloribus dolor ullam
          <br />
          error laudantium adipisci?
        </span>
        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* {right side} */}
      <div className="cards">
        <div style={{ left: "14rem" }}>
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            details={"Figma, Sketch, Photooshop, Adobe, Adobe xd"}
          />
        </div>

        {/* {second card} */}
        <div style={{ top: "12rem", left: "-4rem" }}>
          <Card
            emoji={Glasses}
            heading={"Developer"}
            details={"Html,Css,Javascript,React"}
          />
        </div>
        <div style={{top:"19rem",left:"12rem"}}>
          <Card
          emoji={Humble}
          heading={"UI/UX"}
          details={"Monocept and swabhav technologies are good friends"}
          />

        </div>
        <div className="blur s-blur2" style={{background:"var(--purple"}}></div>
      </div>
    </div>
  );
};

export default Services;
