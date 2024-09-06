import { db } from "../helpers/db.js";
import bcrypt from "bcryptjs";

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

}
export const signOut = (req, res) =>{

}