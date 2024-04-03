import React from "react";
import { useSelector } from "react-redux";

const ConversationsItem = ({ props }) => {
  const lightTheme = useSelector((state)=>state.theme)
  return (
    <div className={"conversation-container"+ (lightTheme ? "" : " dark")}>
      <p className={"con-icon"+ (lightTheme ? "" : " dark")}>{props.name[0]}</p>
      <p className={"con-title"+ (lightTheme ? "" : " dark")}>{props.name}</p>
      <p className={"con-lastMessage"+ (lightTheme ? "" : " dark")}>{props.lastMessage}</p>
      <p className={"con-timeStamp"+ (lightTheme ? "" : " dark")}>{props.timeStamp}</p>
    </div>
  );
};

export default ConversationsItem;
