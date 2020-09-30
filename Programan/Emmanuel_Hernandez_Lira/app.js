require('dotenv/config');

const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

// Import routes.
const bandsRoute = require('./routes/bands');

db.authenticate()
  .then(() => console.log('DB connection has been established successfully.'))
  .catch((err) => console.error(`Unable to connect to the DB: ${err}`));

const app = express();

app.use(bodyParser.json());

// Routes.
app.use('/api/bands', bandsRoute);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
