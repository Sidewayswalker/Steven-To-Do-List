const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;

// Route Includes
const allData = require('./routes/allData.router');
const completed_events = require('./routes/completed_events.router');

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

// Routes
app.use('/api/allData', allData);
app.use('/api/completed_events', completed_events);

// Listen Server & Port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
