import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9999;

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Conected to database"))
  .catch(() => console.log("Disconected from database"));

app.use("/api", userRouter);

app.listen(PORT, () => {
  console.log("Server is running...");
});
