import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import { ApiError } from "./src/framework/utils/apiError.js";
import { globalError } from "./src/framework/middleware/index.js";

import connectMongoDB from "./src/framework/config/db.js";
import { usersRoute } from "./src/components/users/index.js";
import { tasksRoute } from "./src/components/tasks/index.js";

dotenv.config();
const app = express();
connectMongoDB();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Backend Mode : ${process.env.NODE_ENV}`);
}

app.use(express.json());
app.use(helmet());

//all Routes //? need to update using loop.
app.use("/api/v1/auth", usersRoute);
app.use("/api/v1/tasks", tasksRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`Can't find this route : ${req.originalUrl}`, 404));
});

//project error handler structure.
app.use(globalError);

const port = process.env.PORT || 5000;

const server = app.listen(port, () => {
  console.log("This app is running on http://localhost:5000");
});

//? handle rejection outside of express.

process.on("unhandledRejection", (err) => {
  console.log(`UnhandledRejection Error : ${err.name} \n Stack : ${err.stack}`);
  server.close(() => {
    console.log("Shutting down...");
    process.exit(1);
  });
});
