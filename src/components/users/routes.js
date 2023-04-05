//user routes export
import express from "express";
//? import user methods from index
//? import auth method here.

const usersRoute = express.Router();

usersRoute.post("/login");
usersRoute.post("/signup");
usersRoute.put("/users/:id");

export default usersRoute;
