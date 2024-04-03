import React from "react";
import { IconButton } from "@mui/material";
import DoneOutlineRoundedIcon from "@mui/icons-material/DoneOutlineRounded";
import { useSelector } from "react-redux";

const CreateGroups = () => {
  const lightTheme = useSelector(state=>state.theme)
  return (
    <div className={"createGroups-container"+ (lightTheme ? "" : " dark")}>
      <input
        type="text"
        placeholder="Enter Group Name"
        className={"search-box"+ (lightTheme ? "" : " dark")}
      />
      <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
};

export default CreateGroups;
