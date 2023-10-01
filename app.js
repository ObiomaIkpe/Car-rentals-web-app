const path = require('path');
const express = require('express');
const mainRoutes = require('./routes/home/mainRoutes');
const adminRoutes = require('./routes/admin/adminRoutes');
const adminPosts = require('./routes/admin/posts');


const app = express();

// import { engine } from 'express-handlebars';
//set the view engine
const exphb = require('express-handlebars')
const engine = exphb.engine()
app.engine('handlebars', engine);
app.set('view engine', 'handlebars');
app.set('views', './views');



app.use(express.static(path.join(__dirname, 'public' )));

//use routes
app.use('/', mainRoutes);
app.use('/admin', adminRoutes);
app.use('/admin/posts', adminPosts)


   
module.exports = app

