import React from "react";
import Typed from "react-typed";
import image from "../penn.png";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import * as animation from 'react-reveal'


const Experience = () => {
    return (
        <a id="experience">
        <div className="experience-wrapper">
            <div className="experience-info">
            <h1>Experience</h1>
            <animation.Zoom>
        <Accordion className="Accordion" defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        University of Pennyslvania: Lead Mathematics Teaching Assistant - August 2018 to Present
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>
          Philadelphia, PA
          <ul>
              <li>Organized a team of 20 Teaching Assistants and guided them through a new curriculum, how to cover content, strategies to improve student engagement, and organizing grading</li>
              <li>Conducted Calculus and Linear Algebra recitations and review sessions for 90 engineering students for 3 hours a week</li>
              <li>Winner of the Good Teaching Award (Highest honor at the Department of Mathematics)</li>
              <li>Pioneered transition of Calculus classes to follow an application-based approach to Mathematics</li>
              <li>Produced course content for students to gain more practice, incorporating examples from Computer Science, Electrical Engineering and Economics</li>
          </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Talenox: Software Engineering Intern - June 2020 to September 2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>
          <p>Singapore - Remote from Hong Kong</p>
          <p><em>Talenox is a Human Resource Management technology company based out of Singapore and operating in the South East Asia market. The platform is essentially a competitor to Workday.</em></p>
          <ul>
              <li>Coded with Ruby on Rails, PostgreSQL, HTML and Javascript developing a platform for employees of a company to apply for Leave at <a href="https://www.talenox.com">www.talenox.com</a> </li>
              <li>Designed, tested and implemented an API for integration with various third party firms across Asia</li>
              <li>Worked with teams in Singapore and Malaysia</li>
          </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card> 
<Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2">
        Efrtls / Salahfalah / Patronish: Software Engineering Intern - June 2020 to September 2020
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>
      <p>London, United Kingdom - Remote from Hong Kong</p>
          <p><em>Efrtls is a technology company that works with many startups around the world. Salahfalah and Patronish are two startups that work with efrtls. </em></p>
          <ul>
              <li>Managed a college intern in Turkey as they got accustomed to working in the software industry. Responsibilities included provided guidance, tutoring and pair programming opportunities.</li>
              <li>Developed mobile and web apps under Efrtls’ portfolio of apps using React Native and ReactJS with Google Firebase</li>
            <li>Launched a customer service web portal for integration of app with Telenor (based in Denmark and Pakistan) to manage users and subscriptions, increasing user base by 3000%</li>
          </ul>
      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="3">
        Istanbul Technical University: Consulting Intern for Prof. Ufuk Cebeci - July 2019 to August 2019
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="3">
      <Card.Body>
      <p>Istanbul, Turkey</p>
          <p><em>Istanbul Technical University is one of the top five schools in Turkey. Prof. Ufuk Cebeci is a Professor of Industrial Engineering at the University specializing in assisting technology companies develop their products in and beyond Turkey. </em></p>
          <ul>
              <li>Consulted for innovative firms to develop products, streamline manufacturing and push products internationally</li>
              <li>Collaborated and filed patent and grant applications to TUBITAK (Turkey’s Scientific and Technological Research Council) and the European Union Patent Office (EPO) on the world’s fastest soap packaging machine</li>
          </ul>
          </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
</animation.Zoom>
</div>
        </div>
        </a>
    )
}

export default Experience
