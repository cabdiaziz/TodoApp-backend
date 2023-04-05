//? this schema needs a validation
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    uid: { type: String, required: [true, "uid is required"] },
    name: { type: String, required: [true, "name is required"] },
    email: { type: String, required: [true, "email is required"] },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    active: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
