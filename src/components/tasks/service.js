//* business logic layer

export const newTaskService = async ({ createNewTask }, { description }) => {
  const newTask = await createNewTask({ description });
  return newTask;
};

export const getAllTasksService = async ({ pagination }, { findAllTasks }) => {
  const allTasks = await findAllTasks({ pagination });
  return allTasks;
};

//@desc need an update this function.
export const updateTaskService = async ({ findAndUpdateTask }, { data }) => {
  const task = await findAndUpdateTask(data);
  return task;
};

export const getTaskService = async ({ findTask }, { _id }) => {
  const task = await findTask(_id);
  return task;
};

export const deleteTaskService = async ({ deleteTaskById }, { _id }) => {
  const task = await deleteTaskById(_id);
  return task;
};
