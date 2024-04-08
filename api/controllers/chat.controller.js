import { errorHandler } from "../utils/error.js";
import Chat from "../models/chat.model.js";
import User from "../models/user.model.js";

export const accessChat = async (req, resp, next) => {
  const { userId } = req.body;

  if (!userId) {
    return next(errorHandler(400, "Login to your account!!"));
  }

  var isChat = await Chat.find({
    isGroupChat: false,
    $and: [
      { users: { $elemMatch: { $eq: req.user.id } } },
      { users: { $elemMatch: { $eq: req.userId } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name email",
  });

  if (isChat.length > 0) {
    resp.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user.id, userId],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      resp.status(200).json(FullChat);
    } catch (error) {
      next(error);
    }
  }
};
