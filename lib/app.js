const express = require('express');
// const path = require('path');

const app = express();

app.use('/zodiac', require('./controllers/zodiac'));

module.exports = app;
