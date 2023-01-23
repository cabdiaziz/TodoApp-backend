//user routes export
import express from "express";
//? import user methods from index
//? import auth method here.

const userRoute = express.Router();

userRoute.post("/users");
userRoute.post("/registration-users");
userRoute.put("/users/:id");

export default userRoute;