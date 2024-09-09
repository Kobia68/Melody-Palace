import express from 'express';
import cors from "cors";
import cookieParser from "cookie-parser"

import router from './routes/authRoutes.js';


const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser())

app.use(router);



app.get("/test", (req, res)=> {
    res.send("rest")
})

app.listen(5000, ()=>{
    console.log('Connection Successful')
}) 