import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import authRoutes from "./routes/auth.js"
import cors from 'cors';


dotenv.config()
const app = express();

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api/auth', authRoutes);



app.get("/", (req, res)=>{
    res.send("Hello Stranger!");
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}...`)
    connectDB(process.env.MONGO_URI);
});