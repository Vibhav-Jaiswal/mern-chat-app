import React, { useContext, useEffect, useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";
import { refreshSidebar } from "../Redux/refreshSidebar";
import { myContext } from "./MainContainer";

const Users = () => {
  const lightTheme = useSelector((state) => state.theme);
  const { currentUser } = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const { refresh, setRefresh } = useContext(myContext);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(`/api/user/get-users/${currentUser._id}`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
        } else {
          setUsers(data);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  }, [refresh]);
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          duration: "0.3",
        }}
        className="list-container"
      >
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img src={logo} style={{ height: "2rem", width: "2rem" }} />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>
            Online Users
          </p>
        </div>
        <div className={"sb-search" + (lightTheme ? "" : " dark")}>
          <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input className={"search-box" + (lightTheme ? "" : " dark")} />
        </div>
        <div className="ug-list">
          {users &&
            users.map((user) => (
              <motion.div
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                key={user._id}
                className={"list-item" + (lightTheme ? "" : " dark")}
              >
                <p className={"con-icon" + (lightTheme ? "" : " dark")}>
                  {user.username[0]}
                </p>
                <p className={"con-title" + (lightTheme ? "" : " dark")}>
                  {user.username}
                </p>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Users;
