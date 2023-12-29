//import logo from "./logo.svg";
import "./App.css";
import Preloader from "./components/preLoader";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FullScreenMenu from "./components/FullScreenMenu";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls } from "@react-three/drei";

function Model(props) {
  const { scene } = useGLTF("./keyboard.glb");
  // Use useFrame to rotate the model continuously
  useFrame(() => {
    // Rotate the model on the Y-axis (you can adjust the rotation speed as needed)
    scene.rotation.y += 0.01;
    scene.rotation.x += 0.01;
  });
  return <primitive object={scene} {...props} />;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "white",
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
    menu: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  const menuEnter = () => setCursorVariant("menu");
  const menuLeave = () => setCursorVariant("default");

  return (
    <>
      <Preloader />
      <div className="hline"></div>
      <motion.div
        className="cursor"
        variants={variants}
        animate={cursorVariant}
      ></motion.div>
      <div
        className="Menu"
        onMouseEnter={menuEnter}
        onMouseLeave={menuLeave}
        onClick={toggleMenu}
      >
        .menu
      </div>
      <FullScreenMenu isOpen={isMenuOpen} onClose={toggleMenu} />
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="name">
        Nathanaël <br /> Lecron
      </div>
      <img
        src="https://media.vogue.fr/photos/5d31bf328133af0008628de6/1:1/w_4617,h_4617,c_limit/GettyImages-486778371.jpg"
        alt="ds"
        height="500"
        width="500"
      />
      <div className="landing">
        <div className="desc">
          I am a french student who as a fierce and profound curiosity in
          computer science and who whishes to make software engineer his job. I
          am currently enrolled in a B.S in computer science at the Orléans
          University and will graduate in 2026. I am enthusiastic about
          exploring new technologies and collaborating with experienced
          professionals to create meaningful experiences.
        </div>

        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fove: 45 }}
          style={{
            position: "absolute",
            width: "800px",
            height: "450px",
            top: "760px",
            right: "100px",
            zIndex: "-1",
          }}
        >
          <color attach="background" args={["#000000"]} />
          <PresentationControls speed={1.5} zoom={0.5}>
            <Stage environment={"city"}>
              <Model scale={0.015} />
            </Stage>
          </PresentationControls>
        </Canvas>

        <div class="marquee">
          <div class="track">
            <div class="content">
              &nbsp;DEVELOPER PASSIONNATE STUDENT CURIOUS LEARNER DEVELOPER
              PASSIONNATE STUDENT CURIOUS LEARNER DEVELOPER PASSIONNATE STUDENT
              CURIOUS LEARNER
            </div>
          </div>
        </div>
      </div>
      <div className="hline2"></div>
      <div className="projects">Some of my projects</div>
        <div className="project1">
          Weather Windows App
          <div className="p1-content">
            I developed a straightforward weather application using Electron,
            which allowed me to create a Windows application using HTML and CSS.
            This project proved to be instrumental in reinforcing my proficiency
            in HTML and CSS, providing a practical application for the
            theoretical knowledge I had acquired. Moreover, during the
            development process, I delved into the utilization of version
            control tools, particularly Git, which significantly enhanced my
            understanding of collaborative coding and project management.
            Through this experience, I not only expanded my technical skills but
            also gained valuable insights into the importance of efficient
            version control in software development.
          </div>
        </div>
        <div className="project2">
          C++ 3D Graphics
          <div className="p2-content">
            I engaged in the creation of diverse shaders and explored 3D
            rendering using the OpenGL library in conjunction with the C++
            programming language. This endeavor proved to be pivotal in
            deepening my comprehension of computer graphics, providing hands-on
            experience in leveraging the powerful capabilities of OpenGL for
            graphical rendering tasks. Additionally, the project served as a
            valuable platform for enhancing my proficiency in the C++ language,
            allowing me to apply its features and principles in a practical
            context.
          </div>
        </div>
        <div className="project3">
          Python Suspension simulation
          <div className="p3-content">
            I developed a Python simulation for a mechanically accurate vehicle
            suspension system, mimicking its response across diverse terrains.
            This project not only strengthened my Python skills but also
            showcased the practical application of programming in addressing
            real-world challenges. By connecting theoretical knowledge to
            tangible problems, I gained valuable insights into both Python's
            capabilities and the transformative potential of programming in
            practical scenarios.
          </div>
        </div>
      <div className="footer">© 2024 Nathanaël Lecron</div>
    </>
  );
}

export default App;
