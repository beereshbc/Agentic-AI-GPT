import express from "express"
import "dotenv/config"
import connectDB from "../services/auth/config/connectDB.js";
import proxy from "express-http-proxy";
import cors from 'cors'
import cookieParser from "cookie-parser";

const port = process.env.PORT || 8000

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:process.env.FRONTEND_URI,
    credentials:true
}))

app.use("/auth", proxy(process.env.AUTH_SERVICE))


app.get("/", (req, res)=>{
    res.send("Hi Beeresh, from Gateway")
})

app.listen(port, ()=>{
    console.log(`Gateway server is running on port ${port}`);
})