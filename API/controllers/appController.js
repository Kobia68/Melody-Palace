import { db } from "../helpers/db.js";

export const getEvents = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM events WHERE cat = ?" : "SELECT * FROM events";

    db.query(q, [req.query.cat], (err, data)=> {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getEventDetails = (req, res) => {

}