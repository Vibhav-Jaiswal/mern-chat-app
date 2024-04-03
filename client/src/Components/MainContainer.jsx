import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const lightTheme = useSelector(state=>state.theme)
  return (
    <div className={"main-container"+ (lightTheme ? "" : " dark")}>
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
