import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";

export const test = (req, resp) => {
  resp.send("API Is Working...");
};

export const signup = async (req, resp, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    return next(errorHandler(400, "all fields are required!!"));
  }

  const existEmail = await User.findOne({ email });

  if (existEmail) {
    return next(errorHandler(400, "email already exist!!"));
  }

  const existUserName = await User.findOne({ username });
  if (existUserName) {
    return next(errorHandler(400, "username already taken!!"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });

  try {
    await newUser.save();
    resp.status(200).json("user created successfuly!!");
  } catch (error) {
    next(error);
  }
};


