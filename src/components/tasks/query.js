import { Task } from "./index.js";

export const createNewTask = async (task) => {
  return await Task.create(task);
};

//if you wanna to deselect field write _field-name in mongoose.
export const findAllTasks = async () => {
  return await Task.find({}).select("description isCompleted");
};

export const findOneTask = async (_id) => {
  return await Task.findOne({ _id });
};

export const findAndUpdateTask = async (task) => {
  const { _id } = task;
  const { isCompleted } = task;
  return await Task.findByIdAndUpdate(
    _id,
    { $set: { isCompleted } },
    { new: true }
  ).select("description isCompleted");
};
