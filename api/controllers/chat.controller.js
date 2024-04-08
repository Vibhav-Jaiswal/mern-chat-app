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

export const fetchChat = async (req, resp, next) => {
  try {
    Chat.find({ users: { $elemMatch: { $eq: req.user.id } } })
      .populate("users", "-password")
      .populate("groupAdmin", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name email",
        });
        resp.status(200).json(results);
      });
  } catch (error) {
    next(error);
  }
};

export const createGroup = async (req, resp, next) => {
  if (!req.body.users || !req.body.name) {
    return resp.status(400).json({ message: "Data is insufficient" });
  }

  var users = JSON.parse(req.body.users);
  console.log("chatController/createGroups : ", req);
  users.push(req.user);

  try {
    const groupChat = await Chat.create({
      chatName: req.body.name,
      users: users,
      isGroupChat: true,
      groupAdmin: req.user,
    });

    const fullGroupChat = await Chat.findOne({ _id: groupChat._id })
      .populate("users", "-password")
      .populate("groupAdmin", "-password");

    resp.status(200).json(fullGroupChat);
  } catch (error) {
    next(error);
  }
};

export const fetchGroup = async (req, resp, next) => {
  try {
    const allGroups = await Chat.where("isGroupChat").equals(true);
    resp.status(200).json(allGroups);
  } catch (error) {
    next(error);
  }
};

export const groupExit = async (req, resp, next) => {
  const { chatId, userId } = req.body;

  // check if the requester is admin

  const removed = await Chat.findByIdAndUpdate(
    chatId,
    {
      $pull: { users: userId },
    },
    {
      new: true,
    }
  )
    .populate("users", "-password")
    .populate("groupAdmin", "-password");

  if (!removed) {
    return next(errorHandler(404, "Chat Not Found!!"));
  } else {
    resp.json(removed);
  }
};
