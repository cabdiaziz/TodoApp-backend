//* business logic layer
export const newTaskService = async ({ createNewTask }, { description }) => {
  try {
    // if (!description) return apiErrorHandler(400, "Empty data is not allowed");
    const newTask = await createNewTask({ description });
    // what if description is empty..? need a body validation
    return newTask;
  } catch (err) {
    return err.message;
  }
};

export const getAllTasksService = async ({ pagination }, { findAllTasks }) => {
  try {
    const allTasks = await findAllTasks({ pagination });
    // what if no task found..?
    return allTasks;
  } catch (err) {
    return err.message;
  }
};

export const taskCompletionService = async (
  { findAndUpdateTask },
  { task }
) => {
  try {
    const completedTask = await findAndUpdateTask(task);

    return completedTask;
  } catch (err) {
    return err.message;
  }
};

export const getTaskService = async ({ findTask }, { _id }) => {
  const task = await findTask(_id);
  // what if task found..? -> return not-found.
  return task;
};

export const deleteTaskService = async ({ deleteTaskById }, { _id }) => {
  const task = await deleteTaskById(_id);
  return task;
};
