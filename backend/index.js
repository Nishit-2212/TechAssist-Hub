import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import userRoutes from "./routes/user.js"

const PORT = process.env.PORT || 3000;
const app = express();

dotenv.config();

app.use(cors())
app.use(express.json())

app.use("/api/auth",userRoutes)


mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected ")
        app.listen(PORT, () => {
            console.log(`Server at ${PORT} is listening`);
        })
    })
    .catch((err) => console.log("MongoDB is not connected:",err))