const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//! GET from "events"
router.get('/', (req, res) => {
    const query = `
        SELECT * FROM "events"
        ORDER BY "priority" DESC, "due_date" ASC
    `;
    pool.query(query)
    .then(result => {
        console.log('Server: Fetched events from DB:', result.rows);
        res.send(result.rows);
    })
    .catch(err => {
        console.log('ERROR fetching events: "GET" allData.router.js ', err);
        res.sendStatus(500);
    });
});


//! POST to "events"
router.post('/', (req, res) => {
    console.log('Incoming data:', req.body);
    const { event, description, priority, status, due_date } = req.body;

    // Check for the presence of required fields
    if (!event || !description || !priority || !status || !due_date) {
        return res.status(400).send({ error: 'All fields are required' });
    }

    const query = `
        INSERT INTO "events" ("event", "description", "priority", "status", "due_date")
        VALUES ($1, $2, $3, $4, $5)
        RETURNING id;
    `;

    const values = [event, description, priority, status, due_date];

    // Execute the query to insert data into the database
    pool.query(query, values)
    .then(result => {
        console.log('Server: Event added with ID:', result.rows[0].id);
        res.status(201).send({ id: result.rows[0].id }); // Send back the new event ID
    })
    .catch(err => {
        console.log('ERROR adding event: "POST" allData.router.js ', err);
        res.sendStatus(500);
    });
});


//! DELETE from "events"
router.delete('/:id', (req, res) => {
    const queryText = `
      DELETE FROM "events" 
      WHERE id = $1;
    `;
    pool.query(queryText, [req.params.id])
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.error('Error in DELETE /api/allData/:id', err);
        res.sendStatus(500);
      });
});

module.exports = router;
