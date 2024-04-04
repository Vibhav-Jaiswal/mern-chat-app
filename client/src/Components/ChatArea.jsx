import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

const ChatArea = () => {
  const lightTheme = useSelector((state) => state.theme);
  var props1 = {
    name: "test1",
    lastMessage: "last message 1",
    timeStamp: "today",
  };
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
        className={"chatArea-container" + (lightTheme ? "" : " dark")}
      >
        <div className={"chatArea-header" + (lightTheme ? "" : " dark")}>
          <p className={"con-icon" + (lightTheme ? "" : " dark")}>
            {props1.name[0]}
          </p>
          <div className={"header-text" + (lightTheme ? "" : " dark")}>
            <p className={"con-title" + (lightTheme ? "" : " dark")}>
              {props1.name}
            </p>
            <p className={"con-timeStamp" + (lightTheme ? "" : " dark")}>
              {props1.timeStamp}
            </p>
          </div>
          <IconButton>
            <DeleteIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
        <div className={"messages-container" + (lightTheme ? "" : " dark")}>
          <MessageOther />
          <MessageSelf />
        </div>
        <div className={"text-input-area" + (lightTheme ? "" : " dark")}>
          <input
            placeholder="Type a Message"
            className={"search-box" + (lightTheme ? "" : " dark")}
          />
          <IconButton>
            <SendIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatArea;
