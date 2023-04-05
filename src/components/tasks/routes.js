//Task routes
import express from "express";
import {
  createTask,
  getTasks,
  taskCompletion,
  getTask,
  deleteTask,
} from "./index.js";

const taskRoute = express.Router();

//short way to handle all routes in one line..
taskRoute.route("/tasks").get(getTasks).post(createTask);
taskRoute
  .route("/tasks/:_id")
  .get(getTask)
  .put(taskCompletion)
  .delete(deleteTask); //get task, update task status, delete task.

export default taskRoute;
