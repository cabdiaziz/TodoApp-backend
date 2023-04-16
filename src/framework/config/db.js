//? db configurations here. my-app -collection:users,tasks in mongodb
import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

const connectMongoDB = asyncHandler(async () => {
  mongoose.set("strictQuery", false); // mongoose 7 will set false as default.
  const connection = mongoose.connect(process.env.MONGO_URL);
  console.log("Connect to MongoDB 🤪");
  return connection;
});

export default connectMongoDB;
