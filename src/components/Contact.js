import React, { useRef } from "react";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import "./Contact.css";

export const Contact = () => {
  const preloadedImage3 = new Image();
  preloadedImage3.src =
    "https://media.vogue.fr/photos/64c9182ab03f46b17f0da72c/2:3/w_2560%2Cc_limit/12.Strada%2520Romana%2520Bordighera.jpg";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        form.current,
        "3wcOjOzauDMKp9ULa"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <motion.input
        type="submit"
        value="Send"
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </form>
  );
};
