import React, { useState } from "react";
import logo from "../Images/live-chat_512px.png";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      } else {
        setError(null);
        setLoading(false);
        navigate("/login");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="login-box">
        <p className="login-text"> Create your Account</p>
        <TextField
          id="username"
          label="Enter User Name"
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          id="email"
          label="Enter Email"
          variant="outlined"
          onChange={changeHandler}
        />
        <TextField
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={changeHandler}
        />
        <Button onClick={handleSubmit} variant="outlined">
          {loading ? "Signing up ..." : "Signup"}
        </Button>
        <div className="account-check">
          <span>Already have an account?</span>
          <Link to="/login">Login</Link>
        </div>
        <div className="error">
          <span>{error && error}</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
