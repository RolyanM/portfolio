import React from 'react'
import  "./Menu.scss"
import { useState } from 'react';
const Menu = (menuOpen) => {


  
  

  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li>
          <a href="#Landing">Home</a>
        </li>
        <li>
          <a href="#AboutMe">About Me</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contacts">Contact Me</a>
        </li>
      

      </ul>

    </div>
  )
}

export default Menu
