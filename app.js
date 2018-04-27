"use strict";
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const debug = require('debug');
const dbUrl = 'mongodb://<user>:<pass>@ds157599.mlab.com:57599/devhost18';

// mongoose.connect(dbUrl, (err) => {
//     if(err){
//         console.log(err);
//     } else {
//         console.log('connected to db');
//     }
// });
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>{
    res.render('index');
});

app.post('/', (req, res) => {
    console.log(res.body.name);
    res.redirect('/');
});

app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.status(404).json("Page not found");
});




app.set('port', process.env.PORT || 8080);

var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});