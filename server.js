import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectMongoDB from "./src/framework/config/db.js";

const app = express();
dotenv.config();
connectMongoDB();

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/", (req, res) => {
    res.json("Welcome to home page.");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log("app is running on http://localhost:5000");
});