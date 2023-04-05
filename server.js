import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectMongoDB from "./src/framework/config/db.js";
import { userRoute } from "./src/components/users/index.js";
import { taskRoute } from "./src/components/tasks/index.js";
import { ApiError } from "./src/framework/utils/apiError.js";
import { globalError } from "./src/framework/middleware/errorMiddleware.js";

const app = express();
dotenv.config(); //env setup.
connectMongoDB(); //db connection.

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log(`Mode : ${process.env.NODE_ENV}`);
}

app.use(express.json());
app.use(helmet());

//all Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1", taskRoute);

app.all("*", (req, res, next) => {
  next(new ApiError(`can't find this route : ${req.originalUrl}`, 400));
});

app.use(globalError);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("This app is running on http://localhost:5000");
});
