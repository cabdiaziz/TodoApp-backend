//Task routes
import express from "express";
import { createTask, getTasks, taskCompletion } from "./index.js";

const taskRoute = express.Router();

taskRoute.post("/tasks", createTask);
taskRoute.get("/tasks", getTasks);
taskRoute.patch("/tasks/:_id", taskCompletion);

export default taskRoute;
