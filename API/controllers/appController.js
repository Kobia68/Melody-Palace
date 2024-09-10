import { db } from "../helpers/db.js";

export const getEvents = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM events WHERE cat = ?" : "SELECT * FROM events";

    db.query(q, [req.query.cat], (err, data)=> {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

export const getEventDetails = (req, res) => {
    const q = "SELECT * FROM events WHERE event_id = ?";

    db.query(q, [req.params.id], (err, data) => {
        if (err) return res.status(500).json(err)
            return res.status(200).json(data[0])
    })
}