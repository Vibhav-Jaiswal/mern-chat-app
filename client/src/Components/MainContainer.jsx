import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";

const MainContainer = () => {
  return <div className="main-container">
    <Sidebar />
    <ChatArea name="test1" timeStamp="online" />
  </div>;
};

export default MainContainer;
