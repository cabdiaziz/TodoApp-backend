//? here will write a methods that do one query per method.
import User from "./index.js";

export const createNewUser = async(user) => {
    //* user parameters it come from express layer.
    return await User.create(user);
};