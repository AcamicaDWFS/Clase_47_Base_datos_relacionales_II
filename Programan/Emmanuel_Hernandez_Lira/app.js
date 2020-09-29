require('dotenv/config');

const PORT = process.env.PORT || 3000;

const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');

db.authenticate()
  .then(() => console.log('DB connection has been established successfully.'))
  .catch((err) => console.error(`Unable to connect to the DB: ${err}`));

const app = express();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
