import React from "react";
import Typed from "react-typed";
// import Navbar from "./Navbar"

const Header = () => {
    return (
        
        <a id="home">
            {/* <Navbar /> */}
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hi! I'm Fatih.</h1>
                <h2>Welcome to my Portfolio</h2>  
                {/* <Typed
                    className="typed-text"
                    strings={["Software enthusiast", "History buff", "Teaching assistant", "Aspiring comedian"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    /> */}
                {/* <a href="#" className="btn-main-offer">Resume</a> */}
            </div>
        </div>
        </a>
    )
}

export default Header
