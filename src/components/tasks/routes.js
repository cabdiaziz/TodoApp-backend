//Task routes
import express from "express";
import {
  createTask,
  getTasks,
  updateTask,
  getTask,
  deleteTask,
} from "./index.js";

const tasksRoute = express.Router();

//short way to handle all routes in one line..
tasksRoute.route("/").get(getTasks).post(createTask);
//get task, update task-status, delete task.
tasksRoute.route("/:_id").get(getTask).put(updateTask).delete(deleteTask);

export default tasksRoute;
