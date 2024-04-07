import React, { useState } from "react";
import "./myStyles.css";
import { IconButton } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SearchIcon from "@mui/icons-material/Search";
import ConversationsItem from "./ConversationsItem";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../Redux/themeSlice";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { signoutSuccess } from "../Redux/userSlice";

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
  const lightTheme = useSelector((state) => state.theme);
  const {currentUser,error} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogOut = async (id) =>{
     try {
      const res = await fetch(`/api/user/signout/${id}`,{
        method:'post'
      })
      const data = await res.json(res);
      if(data.success === false){
        return dispatch(data.message);
      }else{
        dispatch(signoutSuccess())
        navigate('/login');
      }
     } catch (error) {
       dispatch(error.message)
     }
  }

  return (
    <div className="sidebar-container">
      <div className={"sb-header" + (lightTheme ? "" : " dark")}>
        <div>
          <Link to="/app/welcome">
            <IconButton>
              <AccountCircleIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            </IconButton>
          </Link>
        </div>

        <div>
          <Link to="users">
            <IconButton>
              <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
            </IconButton>
          </Link>
          <Link to="groups">
            <IconButton>
              <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
            </IconButton>
          </Link>
          <Link to="create-groups">
            <IconButton>
              <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
            </IconButton>
          </Link>
          <IconButton onClick={() => dispatch(toggleTheme())}>
            {lightTheme && (
              <NightlightIcon
                className={"icon" + (lightTheme ? "" : " dark")}
              />
            )}
            {!lightTheme && (
              <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />
            )}
          </IconButton>
          <IconButton onClick={()=>handleLogOut(currentUser._id)}>
            <ExitToAppIcon className={"icon" + (lightTheme ? "" : " dark")} />
          </IconButton>
        </div>
      </div>
      <div className={"sb-search" + (lightTheme ? "" : " dark")}>
        <IconButton>
          <SearchIcon className={"icon" + (lightTheme ? "" : " dark")} />
        </IconButton>
        <input
          type="text"
          placeholder="search..."
          className={"search-box" + (lightTheme ? "" : " dark")}
        />
      </div>
      <div className={"sb-conversations" + (lightTheme ? "" : " dark")}>
        {conversations.map((conversation, i) => (
          <Link to="chat" style={{ textDecoration: "none" }} key={i}>
            <ConversationsItem props={conversation} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
