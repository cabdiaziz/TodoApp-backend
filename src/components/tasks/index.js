export {
  createTask,
  getTasks,
  updateTask,
  getTask,
  deleteTask,
} from "./controller.js";
export { default as tasksRoute } from "./routes.js";
export {
  newTaskService,
  getAllTasksService,
  updateTaskService,
  getTaskService,
  deleteTaskService,
} from "./service.js";
export {
  createNewTask,
  findAllTasks,
  findTask,
  findAndUpdateTask,
  deleteTaskById,
} from "./query.js";
export { default as Task } from "./model.js";
