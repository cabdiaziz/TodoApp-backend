//user routes export
import express from "express";
//? import user methods from index
//? import auth method here.

const userRoute = express.Router();
//TODO:  /my-profile
userRoute.post("/login");
userRoute.post("/signup");
userRoute.patch("/users/:id");

export default userRoute;
