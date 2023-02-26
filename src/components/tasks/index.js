export { createTask, getTasks, taskCompletion } from "./controller.js";
export { default as taskRoute } from "./routes.js";
export {
  newTaskService,
  getAllTasksService,
  taskCompletionService,
} from "./service.js";
export {
  createNewTask,
  findAllTasks,
  findOneTask,
  findAndUpdateTask,
} from "./query.js";
export { default as Task } from "./model.js";
