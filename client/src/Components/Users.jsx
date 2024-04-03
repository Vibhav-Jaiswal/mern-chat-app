import React from 'react'
import logo from "../Images/live-chat_512px.png";
import { IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';


const Users = () => {
  const lightTheme = useSelector(state=>state.theme);
  return (
    <div className='list-container'>
        <div className={"ug-header"+ (lightTheme ? "" : " dark")}>
            <img src={logo} style={{height:'2rem', width:'2rem'}}/>
            <p className={"ug-title"+ (lightTheme ? "" : " dark")}>Online Users</p>
        </div>
        <div className={'sb-search'+ (lightTheme ? "" : " dark")}>
           <IconButton className={"icon" + (lightTheme ? "" : " dark")}>
            <SearchIcon />
           </IconButton>
           <input className={'search-box'+ (lightTheme ? "" : " dark")} />
        </div>
        <div className="ug-list">
            <div className={"list-item"+ (lightTheme ? "" : " dark")}>
                <p className={"con-icon"+ (lightTheme ? "" : " dark")}>T</p>
                <p className={"con-title"+ (lightTheme ? "" : " dark")}>Test-User</p>
            </div>
        </div>
    </div>
  )
}

export default Users