import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import chatRouter from "./routes/chat.route.js";
import messageRouter from "./routes/message.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9999;
app.use(express.json());
app.use(cookieParser());

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Conected to database"))
  .catch(() => console.log("Disconected from database"));

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("api/message",messageRouter);

app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";

  resp.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
