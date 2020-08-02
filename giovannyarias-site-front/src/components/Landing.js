import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

import Landscape from '../assets/images/landscape.png';
import Me from '../assets/images/me.png';

const Landing = () => {
  return <div className="overflow-box">
    
    <div className="greeting-box">
      Hi I`m <span className="bold">Giovanny</span><br></br>
      <div className="arrow-box"> 
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      <div className="i-love-box">
        and I love <br />to design and develop <span className="bold">beautiful</span> applications.
      </div>
    </div>
    
    <Controller>
      <Scene triggerHook="onLeave" duration="330px" pin>
        <Timeline wrapper={<div id="landing-box" />}>
          
          <img src={Landscape} alt="Valle del Cocora" className="landscape-image"/>
          <img src={Me} alt="Giovanny Arias" className="me-image"/>

        </Timeline>
      </Scene>
    </Controller>  
  </div>
}

export default Landing;