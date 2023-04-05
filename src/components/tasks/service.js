//* business logic layer
export const newTaskService = async ({ createNewTask }, { description }) => {
  const newTask = await createNewTask({ description });
  // what if description is empty..? then we need body data validation
  return newTask;
};

export const getAllTasksService = async ({ pagination }, { findAllTasks }) => {
  const allTasks = await findAllTasks({ pagination });
  return allTasks;
};

//@desc need an update this function.
export const taskCompletionService = async (
  { findAndUpdateTask },
  { task }
) => {
  // what if task data is empty.
  // isCompleted != empty -> setCompleted()/markTaskAsCompleted : else -> updateTask()
  const completedTask = await findAndUpdateTask(task);
  return completedTask;
};

export const getTaskService = async ({ findTask }, { _id }) => {
  const task = await findTask(_id);
  return task;
};

export const deleteTaskService = async ({ deleteTaskById }, { _id }) => {
  const task = await deleteTaskById(_id);
  return task;
};
