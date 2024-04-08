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

export const sendMessage = async (req, resp, next) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return next(errorHandler(400, "Invalid data passed into request"));
  }

  var newMessage = {
    sender: req.user.id,
    content: content,
    chat: chatId,
  };

  try {
    var message = await Message.create(newMessage);
    message = await message.populate("sender", "name pic");
    message = await message.populate("chat");
    message = await message.populate("reciever");
    message = await User.populate(message, {
      path: "chat.users",
      select: "name email",
    });

    await Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message });
    resp.json(message);
  } catch (error) {
    next(error);
  }
};
