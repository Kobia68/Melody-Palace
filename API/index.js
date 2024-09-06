import express from 'express';
import { signUp } from './controllers/authController.js';
import router from './routes/authRoutes.js';


const app = express();
app.use(express.json());

app.use('/api', router);

router.post("/signup", signUp)

app.get("/test", (req, res)=> {
    res.send("rest")
})

app.listen(5000, ()=>{
    console.log('Connection Successful')
}) 