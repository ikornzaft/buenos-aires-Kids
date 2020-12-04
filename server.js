const express = require('express');

const app = express();

const placesRoute = require('./routes/places');

app.listen(3000, () => 'Server Started!');

app.use(express.json());

app.use('/', placesRoute);





