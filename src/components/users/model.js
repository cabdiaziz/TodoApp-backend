//? this schema needs a validation
import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    // uid: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    role: {
      type: String,
      enum: ["superAdmin", "admin", "user"],
      default: "user",
    },
    status: { type: String, enum: ["active", "blocked"], default: "active" },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("users", userSchema);
export default User;
