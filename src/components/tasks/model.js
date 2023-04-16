import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: false },
    // user: {
    //   type: mongoose.schema.type.ObjectId,
    //   ref: "users",
    //   required: [true,"user reference field is required"],
    // },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("tasks", taskSchema);
export default Task;
