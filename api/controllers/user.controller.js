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
