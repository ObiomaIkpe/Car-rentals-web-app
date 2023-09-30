const path = require('path');
const express = require('express');
const mainRouter = require('./routes/home/mainRoutes')
// import { engine } from 'express-handlebars';
const exphb = require('express-handlebars')
const engine = exphb.engine()

const app = express();
app.use(express.static(path.join(__dirname, 'public' )));
app.engine('handlebars', engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use('/', mainRouter);


module.exports = app

