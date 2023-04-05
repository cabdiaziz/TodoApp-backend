export { createTask, getTasks, taskCompletion, getTask } from "./controller.js";
export { default as taskRoute } from "./routes.js";
export {
  newTaskService,
  getAllTasksService,
  taskCompletionService,
  getTaskService,
} from "./service.js";
export {
  createNewTask,
  findAllTasks,
  findTask,
  findAndUpdateTask,
} from "./query.js";
export { default as Task } from "./model.js";
