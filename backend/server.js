import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";
dotenv.config();

const startServer = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB Connected");

        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });

    } catch (err) {
        console.error(err.message);
    }
};

startServer();