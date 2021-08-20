import React, {useEffect, useRef} from 'react'
import "./Landing.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { init } from 'ityped'

const Landing = () => {


  const textRef = useRef();
useEffect(() => {
  init(textRef.current, {
     showCursor: false,
     backDelay: 1500,
     backSpeed:60,
     showCursor: true,
     strings: ['Developer', 'Designer', 'Engineer' ],
     });
}, []);

  return (
    <div id="landing" className="intro">
      
        <div className="wrappper">
          <h1>My Name is Martin, and I am a </h1>
       
          <h1> Software <span ref={textRef}></span></h1>
          
          </div>
        </div>
       
    
  )
}

export default Landing
