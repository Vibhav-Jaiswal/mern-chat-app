import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import Users from "./Users";

const MainContainer = () => {
  return <div className="main-container">
    <Sidebar />
    {/* <ChatArea name="test1" timeStamp="online" /> */}
    {/* <Welcome /> */}
    {/* <CreateGroups /> */}
    <Users />
  </div>;
};

export default MainContainer;
