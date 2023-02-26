//? this schema need a validation
import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    // ref_user: {
    //   type: mongoose.schema.type.objectId,
    //   ref: "Users",
    //   required: true,
    // },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);
export default Task;
