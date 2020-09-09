import React, { useEffect } from 'react';
import AOS from "aos";
import 'aos/dist/aos.css'

import './Team.css';
import Board from './Board';
import Team from './Team';




function Slider() {
  
  useEffect(() =>{
    AOS.init({duration : 2000})

  }, []);

  return (
    <div className='zards'>
      <div className='card' data-aos="flip-up" >
        <h1 style={{paddingBottom: '10px'}}>MEET CYVAT TEAM </h1>
          <ul className='zards__items'>
            < Board />
            < Team />
          </ul>
      </div>
    </div>
  );
}

export default Slider;