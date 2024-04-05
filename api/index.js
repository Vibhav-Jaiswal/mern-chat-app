import express from "express";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
import mongoose from "mongoose";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9999;
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Conected to database"))
  .catch(() => console.log("Disconected from database"));

  
app.use("/api/auth", userRouter);

app.use((err, req, resp, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error!";

  resp.status(statusCode).json({ success: false, statusCode, message });
});

app.listen(PORT, () => {
  console.log("Server is running...");
});
