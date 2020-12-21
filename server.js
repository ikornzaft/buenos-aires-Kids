const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

const placesRoute = require('./routes/places');

app.listen(3000, () => 'Server Started!');
app.use(express.json());
app.use('/', placesRoute);





