//Task routes
import express from "express";
import {
  //controller imports
  createTask,
  getTasks,
  updateTask,
  getTask,
  deleteTask,
  //validator imports
  createNewTaskValidator,
  getTasksValidator,
  getTaskValidator,
  updateTaskValidator,
  deleteTaskValidator,
} from "./index.js";

const tasksRoute = express.Router();

//short way to handle all routes using router.route().
tasksRoute
  .route("/")
  .get(getTasksValidator, getTasks)
  .post(createNewTaskValidator, createTask);

tasksRoute
  .route("/:_id")
  .get(getTaskValidator, getTask)
  .put(updateTaskValidator, updateTask)
  .delete(deleteTaskValidator, deleteTask);

export default tasksRoute;
