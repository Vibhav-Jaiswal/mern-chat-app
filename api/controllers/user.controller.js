import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

export const signout = (req, resp, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "you are not authenticated!!"));
    }
    resp.clearCookie("access_token").status(200).json("lougout successfully");
  } catch (error) {
    next(error);
  }
};

export const getAllUsers = async (req, resp, next) => {
  try {
    if (req.user.id !== req.params.id) {
      return next(errorHandler(401, "you are not authenticated!!"));
    }
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};

    const users = await User.find(keyword).find({
      _id: { $ne: req.user._id },
    });
    res.send(users);
  } catch (error) {
    next(error);
  }
};
