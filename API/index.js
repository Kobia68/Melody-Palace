import express from 'express';
import mysql2 from "mysql2"

const app = express();

app.use(express.json());

const db =mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "2513",
    database: "melodypalace"
})

app.get("/", (req, res) => {
    res.json("This is the request from the user")
}) 

app.get("/users", (req,res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
            return res.json(data)
    })
})

app.post("/users", (req, res) =>{
    const q = "INSERT INTO books (`bookname`, `author`) VALUES (?,?)";
    const values = [req.body.bookname, req.body.author]
    db.query(q, values, (err, data) =>{
        if(err) return res.json(err)
            return res.json("Data sent successfully")
    })
})

app.listen(5000, ()=>{
    console.log('Connection Successful')
}) 