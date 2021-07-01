'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const session = require('express-session');

app.use(express.json()); // adding form information
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));// middlewear for using static assets, front end stuff like css and images

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

app.use(
    session({
        secret: 'get rad!',
        resave: false,
        saveUninitialized: false,
        is_logged_in: false
    })
);

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
const usersController = require('./routes/users');

app.use('/', rootController);
app.use('/users', usersController);