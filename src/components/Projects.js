import React from "react";
import Typed from "react-typed";
import image from "../penn.png";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import pdf from '../Wharton Customer Analytics Research - Team 2 Presentation.pdf'
import part from '../DimpledVariableIndianglassfish-max-1mb.gif'
import spot from '../spotify-2015-logo-560E071CB7-seeklogo.com.png'
import medi from '../medi.png'
import doc from '../doc.png'
import pillow from '../pillow.png'
import * as animation from "react-reveal"
import data from '../data.png'


const Projects = () => {
    return (
        <a id="projects">
        <div className="about-wrapper">
            
            <div className="about-info">
                {/* <h1>About</h1> */}
                <h1>Technical Skills and Projects</h1>
                <h3><em>Sample Recent Projects</em></h3>
                <div className="carddeck">
                

                {/* <div className="carddeck"> */}
                <animation.Zoom>
                <CardDeck className="card-data">
                    
                <Card>
    <Card.Img className="cardimages" variant="top" src={part} />
    <Card.Body>
      <Card.Title>This Website</Card.Title>
      <Card.Text>
        This website began as an endeavor to create a simple HTML and CSS based website. Having scrapped nearly 10 different designs, it has *finally* resulted in a ReactJS website... though my understanding of ReactJS, HTML and CSS have all greatly improved.
      </Card.Text>

      <Card.Text>
          Tech Stack includes ReactJS, HTML and CSS, deployed on github pages
      </Card.Text>
      <Card.Text>

      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href="https://github.com/fatiho/fatiho.github.io">Github Repo </Card.Link>

      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
  
  
  <Card>
    <Card.Img className="cardimages-medi" variant="top" src={medi} />
    <Card.Body>
      <Card.Title>Musallah</Card.Title>
      <Card.Text>
        This is a project developed as a team at the University of Pennsylvania. The app will allow users to suggest different prayer and meditation spaces around a university campus and users can go to these places. Users can also set up events, allowing other users to join an event and create a group atmosphere. Currently in the development and testing phase at the Unviersity of Pennsylvania.
      </Card.Text>

      <Card.Text>
          Tech Stack includes React Native (Javascript) and AWS.
      </Card.Text>
      
    </Card.Body>
    <Card.Footer>
    <Card.Link className="card-link" href="https://github.com/Yboukataya/PrayerSpaceLocator">Github Repo </Card.Link>
      {/* <small className="text-muted">Last updated 1 mins ago</small> */}
    </Card.Footer>
  </Card>
  
  
  <Card>
    <Card.Img className="cardimages-spot" variant="top" src={spot} />
    <Card.Body>
      <Card.Title>Spotify - the command line edition</Card.Title>
      <Card.Text>
        A project completed as part of an exposure to different networking concepts in Computer Science. Designed and implemented a custom protocol that would allow communication between a client and a server file. Check the BitBucket link below for more detail!
      </Card.Text>

      <Card.Text>
          Technology used includes predominantly Python-based development, and testing on the Vagrant Virtual Machine.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Card.Link className="card-link" href="https://bitbucket.org/fatiho/music-player-networking/src/master/">BitBucket Repo </Card.Link>
    </Card.Footer>
  </Card>
  
  
  {/* <Card>
    <Card.Img className="cardimages-doc" variant="top" src={doc} />
    <Card.Body>
      <Card.Title>Traveling Doctor App</Card.Title>
      <Card.Text>
        Comprehensive Android App completed in the Spring of 2020 that allows patient to request a doctor, and a doctor to accept/reject an appointment. Incredibly timely as the app was developed right before the pandemic brought life to a stop.
      </Card.Text>
      <Card.Text>
          Technology incorporated into this project included development on Android Studio (Java), NodeJS and HTML.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href="https://bitbucket.org/fatiho/travelling-doctor/src/master/">BitBucket Repo </Card.Link>

      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  
  
  
  <Card>
    <Card.Img className="cardimages-pillow" variant="top" src={pillow} />
    <Card.Body>
      <Card.Title>Ergonomic Pillow</Card.Title>
      <Card.Text>
        Pillow that could adjust based on the position of the user's head. Sensors detected the position of the skull, cheeks and other noticable facial components and determined if the user was prone to neck cramps. If the user is prone to a neck cramp, the pillow would inflate various parts of the pillow to realign the head with the neck. 
      
      </Card.Text>

      <Card.Text>Tech Stack includes C++ and an mBed Processor</Card.Text>

      
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href="https://devpost.com/software/inflatable-pillow">Devpost</Card.Link>

      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card> */}
  
 
</CardDeck>
</animation.Zoom>

<animation.Zoom>
<CardDeck className="card-data">
<Card>
    <Card.Img className="cardimages-doc" variant="top" src={doc} />
    <Card.Body>
      <Card.Title>Traveling Doctor App</Card.Title>
      <Card.Text>
        Comprehensive Android App completed in the Spring of 2020 that allows patient to request a doctor, and a doctor to accept/reject an appointment. Incredibly timely as the app was developed right before the pandemic brought life to a stop.
      </Card.Text>
      <Card.Text>
          Technology incorporated into this project included development on Android Studio (Java), NodeJS and HTML.
      </Card.Text>
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href="https://bitbucket.org/fatiho/travelling-doctor/src/master/">BitBucket Repo </Card.Link>

      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
  
  
  
  <Card>
    <Card.Img className="cardimages-pillow" variant="top" src={pillow} />
    <Card.Body>
      <Card.Title>Ergonomic Pillow</Card.Title>
      <Card.Text>
        Pillow that could adjust based on the position of the user's head. Sensors detected the position of the skull, cheeks and other noticable facial components and determined if the user was prone to neck cramps. If the user is prone to a neck cramp, the pillow would inflate various parts of the pillow to realign the head with the neck. 
      
      </Card.Text>

      <Card.Text>Tech Stack includes C++ and an mBed Processor</Card.Text>

      
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href="https://devpost.com/software/inflatable-pillow">Devpost</Card.Link>

      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>

<Card>
    {/* <Card.Img variant="top" src="../DimpledVariableIndianglassfish-max-1mb.gif" /> */}
    <Card.Img className="cardimages-data" variant="top" src={data} />
    <Card.Body>
      <Card.Title>Datathon Project</Card.Title>
      <Card.Text>
        In April 2020, I participated in a datathon run by the Wharton School's Consumer Analytics Research Department. Attached is our final presentation. 
      
      </Card.Text>

      <Card.Text>Analyzed and cleaned dataset primarily by using Python and R.</Card.Text>

      
    </Card.Body>
    <Card.Footer>

    <Card.Link className="card-link" href={pdf}>Datathon Final Presentation</Card.Link>

      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
    </Card.Footer>
  </Card>
  
</CardDeck>
</animation.Zoom>
                

                {/* <h3><em>Upcoming Projects</em></h3>
                <animation.Zoom>
                <CardDeck className="c1">
                    
                <Card>
    <Card.Img className="cardimages" variant="top" src={part} />
    <Card.Body>
      <Card.Title>Travelify</Card.Title>
      <Card.Text>
      We are developing a brand new travel app with the ability to recieve and share travel recommendations. 
      </Card.Text>
    </Card.Body>
  </Card>
  
  
  <Card>
    <Card.Img className="cardimages-medi" variant="top" src={medi} />
    <Card.Body>
      <Card.Title>axia</Card.Title>
      <Card.Text>
        A mental health oriented app that allows users to share and value the experiences and challenges faced by members of the community, primarily targetting BAME (Black, Asian and Minority Ethnic) communities in the United Kingdom.
      </Card.Text>
      </Card.Body>
  </Card>
  
  
  <Card>
    <Card.Img className="cardimages-spot" variant="top" src={spot} />
    <Card.Body>
      <Card.Title>Superscalar Instruction Set Architecture</Card.Title>
      <Card.Text>
        Developing a simple superscalar Instruction Set Architecture using Verilog.
      </Card.Text>
  </Card.Body>
  </Card>
</CardDeck>

</animation.Zoom>*/}
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
        {/* </div> */}
        </a>
    )
}

export default Projects