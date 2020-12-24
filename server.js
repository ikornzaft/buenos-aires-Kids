/* if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); 
}
 */
// Imports
const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();

// Static Files
app.use(express.static('public'));

// Set templating Engine
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout')

app.use(express.json());

const indexRouter = require('./routes/index');
const placesRouter = require('./routes/places');

// Routes
app.use('/', indexRouter);
app.use('/places', placesRouter);

// Start listening
app.listen(process.env.PORT || 3000, () => {
  console.log('App listening');
});




