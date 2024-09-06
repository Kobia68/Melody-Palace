import { db } from "../helpers/db";

export const signUp = (req, res) =>{

    // CHECK IF DATA ALREADY EXISTS
    const q = "SELECT * FROM users WHERE email = ? or username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists")
    })
    
}
export const signIn = (req, res) =>{

}
export const signOut = (req, res) =>{

}