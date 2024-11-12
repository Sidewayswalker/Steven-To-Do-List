const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


//! GET "completed_events"
router.get('/', (req, res) => {
    const query = `
        SELECT * FROM "completed_events"
        ORDER BY "due_date" ASC
        LIMIT 10;
    `;
    pool.query(query)
    .then(result => {
        console.log('Server: Fetched completed_events from DB:', result.rows);
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR fetching events: "GET" completed_events.router.js ', err);
        res.sendStatus(500);
    });
});


//! POST to "completed_events"
router.post('/', (req, res) => {
    console.log('Incoming data:', req.body);
    const { event, description, priority, status, due_date } = req.body;


    const query = `
        INSERT INTO "completed_events" ("event", "description", "priority", "status", "due_date")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;

    const values = [event, description, priority, status, due_date];

    // Execute the query to insert data into the database
    pool.query(query, values)
    .then(result => {
        console.log('Server: completed_events added with ID:', result.rows[0].id);
        res.status(201).send({ id: result.rows[0].id }); // Send back the new event ID
    })
    .catch(err => {
        console.log('ERROR adding event: "POST" completed_events.router.js ', err);
        res.sendStatus(500);
    });
});

module.exports = router;