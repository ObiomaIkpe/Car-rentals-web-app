const express = require('express');
const router = express.Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'admin';
    next();
})

router.get('/', (req, res, next) => {
    res.send('It works')
})

router.get('/create', (req, res) => {
    res.render('admin/posts/create')
})


module.exports = router