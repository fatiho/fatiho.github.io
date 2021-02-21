import React from "react";
import Typed from "react-typed";
// import Navbar from "./Navbar"
import * as animation from "react-reveal"

const Contact = () => {
    return (
        
        <a id="contact">
            {/* <Navbar /> */}
            
        <div className="header-wraper">
            <div className="main-info">
            <animation.Slide bottom>
                <h1>Thanks for stopping by!</h1>
                <h3>Hope you enjoyed your visit... do stay in touch!</h3>
                <p>Email: <a href="mailto:fatiho@seas.upenn.edu">fatiho@seas.upenn.edu</a></p>
                <p>Phone: <a href="tel:+12155709069">+1 215 570 9069</a></p>
                <p>LinkedIn: <a href="https://linkedin.com/in/fatih-ozer"> fatih-ozer </a> </p>
                {/* <Typed
                    className="typed-text"
                    strings={["Software enthusiast", "History buff", "Teaching assistant", "Aspiring comedian"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    /> */}
                {/* <a href="#" className="btn-main-offer">Resume</a> */}
                </animation.Slide>
            </div>
        </div>
        
        </a>
    )
}

export default Contact
