//* express layer
import {
  newTaskService,
  getAllTasksService,
  taskCompletionService,
  getTaskService,
  deleteTaskService,
  createNewTask,
  findAllTasks,
  findAndUpdateTask,
  findTask,
  deleteTaskById,
} from "./index.js";
import asyncHandler from "express-async-handler";
import { ApiError } from "../../framework/utils/apiError.js";

//? body data need a validation using express-validator

// @desc  crate a new task.
// @route   POST /api/v1/tasks.
// @access private.
export const createTask = asyncHandler(async (req, res) => {
  try {
    const { description } = req.body;

    const newTask = await newTaskService({ createNewTask }, { description });

    if (newTask.code !== 400) return res.status(201).json(newTask); //if true
    return res.status(newTask.code).json({ message: newTask.message }); //if false
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// @desc  return all tasks.
// @route   GET /api/v1/tasks.
// @access private.
export const getTasks = asyncHandler(async (req, res) => {
  try {
    //pagination.
    const page = req.query.page || 1;
    const limit = req.query.limit || 5;
    const skip = (page - 1) * limit;
    const pagination = { limit, skip }; //result : 5

    const allTasks = await getAllTasksService({ pagination }, { findAllTasks });
    return res
      .status(200)
      .json({ results: allTasks.length, page, data: allTasks });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

// @desc  update task completion.
// @route   PUT /api/v1/tasks.
// @access private.
//* need some changes.
export const taskCompletion = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;
  const { isCompleted } = req.body;
  const task = { _id, isCompleted };

  const completedTask = await taskCompletionService(
    { findAndUpdateTask },
    { task }
  );
  if (!completedTask)
    return next(new ApiError(`No task for this id : ${_id}`, 404));

  return res.status(200).json(completedTask);
});

// @desc  get one task.
// @route  GET /api/v1/tasks/_id.
// @access private.
export const getTask = asyncHandler(async (req, res, next) => {
  const { _id } = req.params;
  const task = await getTaskService({ findTask }, { _id });
  if (!task) return next(new ApiError(`No task for this id : ${_id}`, 404));
  return res.status(200).json({ task });
});

// @desc  delete one task.
// @route   DELETE /api/v1/tasks/_id.
// @access private.
export const deleteTask = async (req, res, next) => {
  const { _id } = req.params;
  const task = await deleteTaskService({ deleteTaskById }, { _id });
  if (!task) return next(new ApiError(`No task for this id : ${_id}`, 404));
  res.status(204).json();
};

//? need some time to manage update section.
export const updateTask = async (req, res) => {};
