import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

const ChatArea = () => {
  var props1 = { name: "test1", lastMessage:"last message 1", timeStamp: "today" };
  return (
    <div className="chatArea-container">
      <div className="chatArea-header">
        <p className="con-icon">{props1.name[0]}</p>
        <div className="header-text">
          <p className="con-title">{props1.name}</p>
          <p className="con-timeStamp">{props1.timeStamp}</p>
        </div>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="messages-container">
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="text-input-area">
        <input placeholder="Type a Message" className="search-box" />
        <IconButton>
            <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
