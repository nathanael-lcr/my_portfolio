//import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/preLoader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FullScreenMenu from "./components/FullScreenMenu";

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [mousePosition, setMousePosition] = useState({
    x:0,
    y:0
  });

  
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default : {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: isMenuOpen ? "black" : "white"
    },
    text : {
      height:150,
      width:150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    },
    menu : {
      height:150,
      width:150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference"
    }
  }

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const menuEnter = () => setCursorVariant("menu");
  const menuLeave = () => setCursorVariant("default");

  

  return (
    <>
      <Preloader />
      <div className="hline"></div>
      <motion.div className="cursor" variants={variants} animate={cursorVariant}></motion.div>
      <div className="Menu" onMouseEnter={menuEnter} onMouseLeave={menuLeave} onClick={toggleMenu}>.menu</div>
      <FullScreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="name">Nathanaël <br /> Lecron</div>
      <img src="https://media.vogue.fr/photos/5d31bf328133af0008628de6/1:1/w_4617,h_4617,c_limit/GettyImages-486778371.jpg"
      alt="ds" height="500" width="500" />
      <div className="landing">
        <div className="desc">
          I am a french student who as a fierce and profound curiosity in computer science and who whishes to make software engineer
          his job. I am currently enrolled in a B.S in computer science at the Orléans University and will graduate in 2026. I am 
          enthusiastic about exploring new technologies and collaborating with experienced professionals to create meaningful experiences.
        </div>
        <div class="marquee">
          <div class="track">
            <div class="content">
              &nbsp;DEVELOPER PASSIONNATE STUDENT CURIOUS LEARNER DEVELOPER PASSIONNATE STUDENT CURIOUS LEARNER DEVELOPER 
              PASSIONNATE STUDENT CURIOUS LEARNER
            </div>
          </div>
        </div>
      </div>
      <div className="hline2"></div>
      <div className="projects">Some of my projects
        <div className="project1">Project 1</div>
        <div className="project2">Project 2</div>
        <div className="project3">Project 3</div>
      </div>
      <div className="footer">© 2024 Nathanaël Lecron</div>
    </>
  );
}

export default App;
