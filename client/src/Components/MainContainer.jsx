import React, { createContext, useState } from "react";
import "./myStyles.css";
import Sidebar from "./Sidebar";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const myContext = createContext();

const MainContainer = () => {
  const lightTheme = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [refresh, setRefresh] = useState(true);

  return currentUser ? (
    <myContext.Provider value={{ refresh: refresh, setRefresh: setRefresh }}>
      <Sidebar />
      <Outlet />
    </myContext.Provider>
  ) : (
    <Navigate to="/login" />
  );
};

export default MainContainer;
