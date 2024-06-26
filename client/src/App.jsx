import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainContainer from "./Components/MainContainer";
import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import ChatArea from "./Components/ChatArea";
import Users from "./Components/Users";
import Groups from "./Components/Groups";
import CreateGroups from "./Components/CreateGroups";
import { useSelector } from "react-redux";
import Signup from "./Components/Signup";

const App = () => {
  const lightTheme = useSelector((state) => state.theme);
  return (
    <div className={"app" + (lightTheme ? "" : "-dark")}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="app" element={<MainContainer />}>
            <Route path="welcome" element={<Welcome />} />
            <Route path="chat" element={<ChatArea />} />
            <Route path="users" element={<Users />} />
            <Route path="groups" element={<Groups />} />
            <Route path="create-groups" element={<CreateGroups />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
