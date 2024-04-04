import React from "react";
import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const CreateGroups = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className={"createGroups-container" + (lightTheme ? "" : " dark")}
      >
        <input
          type="text"
          placeholder="Enter Group Name"
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <DoneOutlineRoundedIcon />
        </IconButton>
      </motion.div>
    </AnimatePresence>
  );
};

export default CreateGroups;
