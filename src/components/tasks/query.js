//* Database layer
import { Task } from "./index.js";

export const createNewTask = async (task) => {
  return await Task.create(task);
};

//if you want to de-select fields (_field-name ,...name).
export const findAllTasks = async ({ pagination }) => {
  const { limit, skip } = pagination;
  return await Task.find({})
    .select("description isCompleted")
    .limit(limit)
    .skip(skip);
};

export const findTask = async (_id) => {
  return await Task.findOne({ _id }).select("description isCompleted");
};

//markTaskAsCompleted function //?update(find,setData,returnLatestData)
// export const markTaskAsCompleted = async (task) => {
//   const { _id, isCompleted } = task;
//   return await Task.findByIdAndUpdate(
//     _id,
//     { $set: { isCompleted } },
//     { new: true }
//   ).select("description isCompleted");
// };

export const findAndUpdateTask = async (task) => {
  //remove this function.
  const { _id, isCompleted } = task;
  return await Task.findByIdAndUpdate(
    _id,
    { $set: { isCompleted } },
    { new: true }
  ).select("description isCompleted");
};

//updateTask function //?update(find,setData,returnLatestData)
// export const updateTask = async (task) => {
//   const { _id, description } = task;
//   return await Task.findByIdAndUpdate(
//     _id,
//     { $set: { description } },
//     { new: true }
//   ).select("description isCompleted");
// };

export const deleteTaskById = async (_id) => {
  return await Task.findByIdAndDelete(_id); //find id and delete.
};
