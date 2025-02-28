import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js"
import cors from 'cors';
import userRoute from './routes/user.route.js'
const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 4000
const URI=process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:",error)
}


//defining Route
app.use("/book",bookRoute);
app.use("/user",userRoute)
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})