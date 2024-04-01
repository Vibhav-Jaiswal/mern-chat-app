import React, { useState } from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";

const Sidebar = () => {
  const [conversations, setConversations] = useState([
    {
      name: "test1",
      lastMessage: "last message 1",
      timeStamp: "today",
    },
    {
      name: "test1",
      lastMessage: "last message 1",
      timeStamp: "today",
    },
    {
      name: "test3",
      lastMessage: "last message 3",
      timeStamp: "today",
    },
  ]);
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </div>

        <div>
          <IconButton>
            <PersonAddIcon />
          </IconButton>
          <IconButton>
            <GroupAddIcon />
          </IconButton>
          <IconButton>
            <AddCircleIcon />
          </IconButton>
          <IconButton>
            <NightlightIcon />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input type="text" placeholder="search..." className="search-box" />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation,i) => (
          <ConversationsItem props={conversation} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
