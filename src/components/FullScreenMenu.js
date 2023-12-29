import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FullScreenMenu.css";

const FullScreenMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    hidden: {
      opacity: 1,
      y: "100%",
      transition: {
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        ease: "ease-in",
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { duration: 0.5 },
        y: { duration: 0.5 },
        ease: "ease-in",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: index * 0.4 }, // Adjust the delay factor
    }),
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
      backgroundColor: "black",
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

  const preloadedImage1 = new Image();
  preloadedImage1.src = "https://media.vogue.fr/photos/5d31bf328133af0008628de6/1:1/w_4617,h_4617,c_limit/GettyImages-486778371.jpg";
  const preloadedImage2 = new Image();
  preloadedImage2.src = "https://upload.wikimedia.org/wikipedia/commons/5/5d/Pissarro_Camille_-_Boulevard_Montmartre_%C3%A0_Paris.jpg";
  const preloadedImage3 = new Image();
  preloadedImage3.src = "https://media.vogue.fr/photos/64c9182ab03f46b17f0da72c/2:3/w_2560%2Cc_limit/12.Strada%2520Romana%2520Bordighera.jpg";
  
  

  const hoverMenu1 = () => {
    const fsmElement = document.getElementById("fsm");
    fsmElement.style.background =`url(${preloadedImage1.src})`;
    fsmElement.style.backgroundSize = "cover";
    fsmElement.style.backgroundPosition = "center";
    setCursorVariant("menu");
  };

  const unhoverMenu1 = () => {
    document.getElementById("fsm").style.background = "";
    setCursorVariant("default");
  };

  const hoverMenu2 = () => {
    const fsmElement = document.getElementById("fsm");
    fsmElement.style.background = `url(${preloadedImage2.src})`;
    fsmElement.style.backgroundSize = "cover";
    fsmElement.style.backgroundPosition = "center";
    setCursorVariant("menu");
  };

  const unhoverMenu2 = () => {
    document.getElementById("fsm").style.background = "";
    setCursorVariant("default");
  };

  const hoverMenu3 = () => {
    const fsmElement = document.getElementById("fsm");
    fsmElement.style.background =`url(${preloadedImage3.src})`;
    fsmElement.style.backgroundSize = "cover";
    fsmElement.style.backgroundPosition = "center";
    setCursorVariant("menu");
  };

  const unhoverMenu3 = () => {
    document.getElementById("fsm").style.background = "";
    setCursorVariant("default");
  };

  const menuEnter = () => setCursorVariant("menu");
  const menuLeave = () => setCursorVariant("default");

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fullscreen-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          id="fsm"
        >
          {/* Your menu content goes here */}
          <motion.div
            className="cursor"
            variants={variants}
            animate={cursorVariant}
          ></motion.div>
          <motion.div variants={textVariants} className="menu-text">
            <ul>
              <motion.li variants={textVariants} custom={0}>
                <a
                  href=""
                  className="menu-item"
                  onMouseEnter={hoverMenu1}
                  onMouseLeave={unhoverMenu1}
                >
                  Home
                </a>
              </motion.li>
              <motion.li variants={textVariants} custom={1}>
                <a
                  href=""
                  className="menu-item"
                  onMouseEnter={hoverMenu2}
                  onMouseLeave={unhoverMenu2}
                >
                  Projects
                </a>
              </motion.li>
              <motion.li variants={textVariants} custom={2}>
                <a
                  href=""
                  className="menu-item"
                  onMouseEnter={hoverMenu3}
                  onMouseLeave={unhoverMenu3}
                >
                  Contact
                </a>
              </motion.li>
            </ul>
          </motion.div>
          <div
            onClick={onClose}
            onMouseEnter={menuEnter}
            onMouseLeave={menuLeave}
            className="close-button"
          >
            .close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
