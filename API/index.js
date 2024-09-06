import express from 'express';


const app = express();
app.use(express.json());

app.get("/test", (req, res)=> {
    res.send("rest")
})

app.listen(5000, ()=>{
    console.log('Connection Successful')
}) 