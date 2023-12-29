import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./FullScreenMenu.css";

const FullScreenMenu = ({ isOpen, onClose }) => {
  const menuVariants = {
    hidden: { opacity: 1, y: "100%" },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fullscreen-menu"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {/* Your menu content goes here */}
          <div onClick={onClose} className="close-button">
            Close Menu
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
