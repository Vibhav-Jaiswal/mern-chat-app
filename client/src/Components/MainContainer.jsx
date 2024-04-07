import React from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const lightTheme = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  return currentUser ? (
    <div className={"main-container" + (lightTheme ? "" : " dark")}>
      <Sidebar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default MainContainer;
