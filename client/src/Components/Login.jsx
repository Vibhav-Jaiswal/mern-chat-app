import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { signInStart, signInSuccess, signInFailure } from "../Redux/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSbmit = async () => {
    try {
      dispatch(signInStart())
      const res = await fetch("/api/auth/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signInFailure(data.message))
      } else {
        navigate("/app/welcome");
        dispatch(signInSuccess(data));
      }
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-box">
        <p className="login-text">Login to your Account</p>
        <TextField
          id="username"
          label="Enter User Name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
        />
        <Button onClick={handleSbmit} variant="outlined">
          Login
        </Button>
        <div className="account-check">
          <span>Already have an account?</span>
          <Link to="/">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
