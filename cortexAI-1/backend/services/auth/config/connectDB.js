import mongoose from "mongoose";


const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => {
            console.log("AuthDB is Connected");
        },
            mongoose.connect(`${process.env.MONGODB_URI}/agenticAI-cortex-auth`)
        )
    } catch (error) {
        console.log("Auth Db connection failed", error.message);
        process.exit(1);

    }

}

export default connectDB;