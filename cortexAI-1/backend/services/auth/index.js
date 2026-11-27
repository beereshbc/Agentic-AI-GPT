import express from "express"
import "dotenv/config"
import connectDB from "./config/connectDB.js";
import authRouter from "./routes/authRouter.js";

const port = process.env.PORT || 8001

const app = express();

await connectDB();
app.use(express.json());

app.use('/', authRouter)


app.get("/", (req, res)=>{
    res.send("Hi Beeresh, from Auth")
})

app.listen(port, ()=>{
    console.log(`Auth server is running on port ${port}`);
})