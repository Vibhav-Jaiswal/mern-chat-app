import React from "react";
import logo from "../Images/live-chat_512px.png";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";

const Welcome = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3",
        }}
        className={"welcome-container" + (lightTheme ? "" : " dark")}
      >
        <motion.img
          drag
          whileTap={{ scale: 1.05, rotate: 360 }}
          src={logo}
          alt="logo"
          className="welcome-logo"
        />
        <b>Hi , Vibhav 👋</b>
        <p>View and text directly to people present in the chat Rooms.</p>
      </motion.div>
    </AnimatePresence>
  );
};

export default Welcome;
