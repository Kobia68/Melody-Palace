import { db } from "../helpers/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = (req, res) =>{

    // CHECK IF DATA ALREADY EXISTS
    const q = "SELECT * FROM users WHERE email = ? or username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists");

    // HASHING THE PASSWORD
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO users (fullname, email, username, phoneNo, password) VALUES (?)";
    const value = [
        req.body.fullname,
        req.body.email,
        req.body.username,
        req.body.phoneNo,
        hash
    ]

    db.query(q, [value], (err, data) => {
        if (err) return res.json(err)
            return res.status(200).json("Sign up successful")
    })
    })
    
}
export const signIn = (req, res) =>{
    // CHECK IF USER EXIST
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.json(err);
        if (data.length ===0 ) return res.status(404).json('User not found')

            // CHECK IF PASSWORD IS CORRECT
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, data[0].password);

        if (!isPasswordCorrect) return res.status(400).json("Wrong username or password");

        const token = jwt.sign({ id:data[0].id }, "jwtkey");

        const {password, ...other} = data[0]

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other)
    })

}
export const signOut = (req, res) =>{
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true
    }).status(200).json("User signed out")
}