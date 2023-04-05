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
export const updateTaskService = async ({ findAndUpdateTask }, { data }) => {
  // what if task data is empty....? need a validation.
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
