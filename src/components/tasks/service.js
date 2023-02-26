export const newTaskService = async (
  { createNewTask, apiErrorHandler },
  { description }
) => {
  try {
    if (!description) return apiErrorHandler(400, "Empty data is not allowed");
    const newTask = await createNewTask({ description });
    return newTask;
  } catch (err) {
    return err.message;
  }
};

export const getAllTasksService = async ({ findAllTasks }) => {
  try {
    const allTasks = await findAllTasks();
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
