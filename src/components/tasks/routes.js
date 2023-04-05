//Task routes
import express from "express";
import { createTask, getTasks, taskCompletion, getTask } from "./index.js";

const taskRoute = express.Router();

taskRoute.route("/tasks").get(getTasks).post(createTask); //short way to get & post.
taskRoute.route("/tasks/:_id").get(getTask).put(taskCompletion); //get one task, update task status.

export default taskRoute;
