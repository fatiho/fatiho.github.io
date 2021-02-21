
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Zoom from "react-reveal/Zoom"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
// import Routes from "./Routes"

function App() {
  return (

    <>
    {/* <Routes /> */}
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <Navbar/>
    <Header/>
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <About />
    <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 60,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <Education/>

    
      <Experience />

    
      <Projects/>

      <Particles
      className="particles-canvas"
      params={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900,
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 4,
              color: "#f9ab00"
            }
          }
        }
      }}/>
    <Contact/>
    </>

    
  );
}

export default App;
