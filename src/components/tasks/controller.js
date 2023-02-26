//? this file is express layer only calls functions and wait responses.
import {
  newTaskService,
  getAllTasksService,
  taskCompletionService,
} from "./index.js";
import { createNewTask, findAllTasks, findAndUpdateTask } from "./index.js";
import apiErrorHandler from "../../framework/middleware/apiErrorHandler.js";

export const createTask = async (req, res) => {
  try {
    const { description } = req.body;

    const newTask = await newTaskService(
      { createNewTask, apiErrorHandler },
      { description }
    );

    if (newTask.code !== 400) return res.status(201).json(newTask); //if true
    return res.status(newTask.code).json({ message: newTask.message }); //if false
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const getTasks = async (req, res) => {
  try {
    const allTasks = await getAllTasksService({ findAllTasks });
    return res.status(200).json({ allTasks });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
export const taskCompletion = async (req, res) => {
  try {
    const { _id } = req.params;
    const { isCompleted } = req.body;
    const task = { _id, isCompleted };

    const completedTask = await taskCompletionService(
      { findAndUpdateTask },
      { task }
    );

    return res.status(200).json(completedTask);
  } catch (err) {
    console.log("Err ==", err);
    res.status(500).json({ message: err.message });
  }
};

export const getOneTask = async (req, res) => {};
export const updateTask = async (req, res) => {};
export const deleteTask = async (req, res) => {};
