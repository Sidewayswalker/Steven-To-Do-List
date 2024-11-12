const { Pool } = require('pg');
let pool;

// Check if the app is running in a production environment
if (process.env.DATABASE_URL) {
    pool = new Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false
        }
    });
} else {
    // Use local database settings for development
    pool = new Pool({
        host: 'localhost',
        port: 5432, 
        database: 'Steven-To-Do' // Local Name of the database I'm using. 
    });
}

module.exports = {
  query: (text, params) => pool.query(text, params)
};
