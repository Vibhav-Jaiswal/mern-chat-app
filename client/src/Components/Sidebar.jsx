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
import { Link, useNavigate } from "react-router-dom";

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
          <Link to="users">
            <IconButton>
              <PersonAddIcon />
            </IconButton>
          </Link>
          <Link to="groups">
            <IconButton>
              <GroupAddIcon />
            </IconButton>
          </Link>
          <Link to="create-groups">
            <IconButton>
              <AddCircleIcon />
            </IconButton>
          </Link>
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
        {conversations.map((conversation, i) => (
          <Link to="chat" style={{ textDecoration: "none" }}>
            <ConversationsItem props={conversation} key={i} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
