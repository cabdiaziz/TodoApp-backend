//Task routes
import express from "express";
import { createTask, getTasks, taskCompletion } from "./index.js";

const taskRoute = express.Router();

taskRoute.route("/tasks").get(getTasks).post(createTask); //short way to get & post.

taskRoute.put("/tasks/:_id", taskCompletion);

export default taskRoute;
