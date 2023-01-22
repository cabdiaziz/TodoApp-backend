//? db configurations here. my-app -collection:users in mongodb
import mongoose from "mongoose";

const connectMongoDB = async() => {
    mongoose.set("strictQuery", false);
    const connection = await mongoose.connect(process.env.MONGO_URL);
    return connection ?
        console.log("Connect to MongoDB") :
        console.log("No connection ?!!! ", connection);
};

export default connectMongoDB;