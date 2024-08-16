import React from 'react'
import './Intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import {themeContext} from '../../Context'
import {useContext } from "react";
// import {motion} from 'framer-motion'

const Intro = () => {

const transition={duration:2,type:'spring'}

  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="intro">
      <div className="i-left"><div className="i-name">
          <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
          <span>Shivamani</span>
          <span>Java Full Stack Developer with High level experience in web designing and development, producting the Quality work
          </span>
        </div>
        <button className="button i-button">Hire Me</button><div className="i-icons">
          <a href='https://github.com/shivamaninalla'>
          <img src={Github} alt="Loading Github" />
          </a>
          <a href="https://www.linkedin.com/in/shivamani-nalla-18304b242/"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.geeksforgeeks.org/"><img src={Instagram} alt="" /></a>
          
        </div>
        </div>
        
      <div className="i-right">
      <img src={Vector1} alt=""  />
      <img src={Vector2} alt=""  />
      <img src={boy} alt=""  />
      <img src={glassesimoji} alt="" />
      <div style={{top:'-4%',left:'68%'}}>
        <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
      </div>
      <div style={{top:'18rem', left:'0rem'}}>
        <FloatingDiv image={thumbup} txt1='Best design' txt2='Award'/>
      </div>
      <div className="blur" style={{background: "rgb(238 210 255"}}></div>
      <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
      </div>
    </div>
  )
}

export default Intro