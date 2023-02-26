import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectMongoDB from "./src/framework/config/db.js";
import { userRoute } from "./src/components/users/index.js";
import { taskRoute } from "./src/components/tasks/index.js";

const app = express();
dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", userRoute);
app.use("/api/v1", taskRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("This app is running on http://localhost:5000");
});
