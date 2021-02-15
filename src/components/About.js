import React from "react";
import Typed from "react-typed";
import image from "../circle-cropped.png";

const About = () => {
    return (
        <a id="about">
        <div className="about-wrapper">
            
            <div className="about-info">
                {/* <h1>About</h1> */}

                <div class="row">
                    <div className="column" >
                        <div className="profile">
                            <img src={image}/>
                        </div>
                    </div>
                    <div className="column" >
                        {/* <h2>Column 2</h2> */}
                        <div className="column-object">
                            <h1>Who is Fatih?</h1>
                            <h1> </h1>
                            <p>Fatih is a senior pursuing a dual degree in Computer Science and International Relations at the University of Pennsylvania. Fatih is interested in solving societal problems around the with the power of technology. He also wants to unite people and put smiles on faces.</p>
                            <p>Fatih has experience working with technology based companies, collaborating and managing team members in the United Kingdom, United States, Hong Kong, Singapore, Malaysia, Pakistan and Turkey.</p>
                            <p>At Penn, Fatih is a teaching assistant with the Department of Mathematics, teaching Single Variable Calculus and Multivariable Calculus. He is one of those who was involved in developing a new-er application based approach to teaching mathematics. </p>
                        </div>
                    </div>
                </div>
                {/* <div className="about-objects">
                <p>Fatih is a senior pursuing a dual degree in Computer Science and International Relations at the University of Pennsylvania. Fatih is interested in solving societal problems around the with the power of technology. He also wants to unite people and put smiles on faces :).
</p>

<p className="p-about">Fatih has experience working with technology based companies, collaborating and managing team members in the United Kingdom, United States, Hong Kong, Singapore, Malaysia, Pakistan and Turkey.
</p>
<p className="p-about">At Penn, Fatih is a teaching assistant with the Department of Mathematics, teaching Single Variable Calculus and Multivariable Calculus. He is one of those who was involved in developing a new-er application based approach to teaching mathematics. 
                </p>
                </div> */}
                {/* <Typed
                    className="typed-text"
                    strings={["Software enthusiast", "History buff", "Teaching assistant"]} 
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    /> */}
                {/* <a href="#" className="btn-main-offer">contact me</a> */}
            
        </div>
        </div>
        </a>
    )
}

export default About
