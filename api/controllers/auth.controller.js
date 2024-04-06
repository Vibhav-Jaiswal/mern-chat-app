import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

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
    resp.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, resp, next) => {
  const { username, password } = req.body;

  if (!username || !password || username === "" || password === "") {
    return next(errorHandler(400, "all fields are required!!"));
  }

  try {
    const validUser = await User.findOne({ username });

    if (!validUser) {
      return next(errorHandler(400, "user not found"));
    }

    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "wwrong credential!!"));
    }

    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET_KEY);

    const { password: pass, ...rest } = validUser._doc;

    resp
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
