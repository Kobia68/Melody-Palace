import { db } from "../helpers/db.js";

export const getEvents = (req, res) => {
    const q = req.query.cat ? "SELECT * FROM events WHERE cat = ?" : "SELECT * FROM events";

    db.query(q, [req.query.cat], (err, data)=> {
        if (err) return res.json(err);
        return res.status(200).json(data);
    })
}

// export const getEvents =(req, res) => {
//   const query = 'SELECT * FROM events';

//   db.query(query, (err, results) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return res.status(500).json({ error: 'Database error' });
//     }

//     res.json(results); // Return all events as a JSON response
//   });
// };

export const getEventDetails = (req, res) => {

}