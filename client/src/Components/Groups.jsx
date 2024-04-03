import React from "react";
import logo from "../Images/live-chat_512px.png";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import { useSelector } from "react-redux";

const Groups = () => {
  const lightTheme = useSelector(state=>state.theme)
  return (
    <div className="list-container">
      <div className={"ug-header"+ (lightTheme ? "" : " dark")}>
        <img src={logo} style={{ height: "2rem", width: "2rem" }} />
        <p className={"ug-title"+ (lightTheme ? "" : " dark")}>Available Groups</p>
      </div>
      <div className={"sb-search"+ (lightTheme ? "" : " dark")}>
        <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
          <SearchIcon />
        </IconButton>
        <input className={"search-box"+ (lightTheme ? "" : " dark")} />
      </div>
      <div className="ug-list">
        <div className={"list-item"+ (lightTheme ? "" : " dark")}>
          <p className={"con-icon"+ (lightTheme ? "" : " dark")}>T</p>
          <p className={"con-title"+ (lightTheme ? "" : " dark")}>Test-Group</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
