import { db } from "../helpers/db.js"


export const addNewPost = (req, res) => {
    const q = "INSERT INTO events (cat, eventName, eventDescription, hostName, eventDate, eventTime, img, regularTicket, vipTicket, vvipTicket) VALUES (?)";

    const values = [
        req.body.cat,
        req.body.eventName,
        req.body.eventDescription,
        req.body.hostName,
        req.body.eventDate,
        req.body.eventTime,
        req.body.img,
        req.body.regularTicket,
        req.body.vipTicket,
        req.body.vvipTicket,
    ];


    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err)
            return res.json("Event has been created")
    })
}

export const getFinances = (req, res) => {

}