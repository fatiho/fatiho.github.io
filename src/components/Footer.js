import React, {useEffect} from "react"
import logo from "../logo.png" 
import './navbar.scss';
// REACT FONTAWESOME IMPORTS
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    
    return (
        
        <nav className="navybary bottom">


  {/* <a className="navbar-brand" href="#">Fatih Ozer</a> */}
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#fff"}}/>
  </button> */}

  {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#about">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#education">Education</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#experience">Professional Experience</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#projects">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#contact">Contact</a>
      </li>
      <li className="nav-item-download">
        <a className="nav-link" href={pdf}>Download Resume</a>
      </li>
      
    </ul> */}
    <div className="footer">

<p>All rights reserved. Fatih Ozer (c) 2021</p>
    </div>
  {/* </div> */}
</nav>

    )
}

export default Footer
