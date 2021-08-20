import React from 'react'
import "./NavBar.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { useState } from 'react';

const NavBar = (props) => {

  
  const [menuOpen, setMenuOpen] = useState()


  return (
    <div className={"topbar " + (!menuOpen &&  "active ")} >
      <div className="wrapper">
        
        <div className="left">
          <a href="#landing" className="headerName">Martin Naylor</a>
          <div className="itemcontainer">
            <FontAwesomeIcon icon={faUser} className="icon"> </FontAwesomeIcon>
            <span>07481 112206 </span>
          </div>
          <div className="itemcontainer">
            <FontAwesomeIcon icon={faEnvelope} className="icon"></FontAwesomeIcon>
            <span>martinnaylor88@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen) }>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
