import express from 'express';
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import cors from 'cors';
import path from 'path';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config();

connectDB();

const app = express();

//Middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
//Routes
app.use('/api/users',userRoutes);
app.use('/api/products',productRoutes);

const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});