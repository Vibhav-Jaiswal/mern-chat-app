import Message from "../models/message.model.js";
import { errorHandler } from "../utils/error.js";

export const allMessages = async (req, resp, next) => {
  try {
    const messages = await Message.find({ chat: req.params.chatId })
      .populate("sender", "name email")
      .populate("reciever")
      .populate("chat");
    resp.json(messages);
  } catch (error) {
    next(error);
  }
};
