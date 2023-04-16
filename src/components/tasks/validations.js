import { check } from "express-validator";
import { validatorMiddleware } from "../../framework/middleware/index.js";

export const createNewTaskValidator = [
  check("description")
    .notEmpty()
    .withMessage("description is required.")
    .isLength({ min: 3 })
    .withMessage("description is too short")
    .isLength({ max: 32 })
    .withMessage("description is too long"),
  validatorMiddleware,
];
export const getTasksValidator = [
  check("_id").isMongoId().withMessage("Invalid task id format"),
  validatorMiddleware,
];
export const getTaskValidator = [
  check("_id").isMongoId().withMessage("Invalid task id format"),
  validatorMiddleware,
];
export const updateTaskValidator = [
  check("_id").isMongoId().withMessage("Invalid task id format"),
 
  check("isCompleted", "description").exists()
  .notEmpty()
    .withMessage("isCompleted or description is required"),
  validatorMiddleware,
];
export const deleteTaskValidator = [
  check("_id").isMongoId().withMessage("Invalid task id format"),
  validatorMiddleware,
];
