import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js';
import cors from 'cors';
import catergoryRoute from './src/routes/categoryRoute.js';
import postsRoute from './src/routes/postsRoute.js';


//env file config
dotenv.config();

//config
connectDB()

//rest object
const app = express();

//middleware
app.use(express.json())
app.use(cors());


//routes
app.use('/api/category', catergoryRoute);
app.use('/api/posts', postsRoute);

//api for home page
app.get("/", (req, res) => {
    res.send({
        message: "hello developers this is a blog api"
    });
})

//Port
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})


















