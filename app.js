'use strict';

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();

app.use(express.json()); // adding form information
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));// middlewear for using static assets, front end stuff like css and images

const es6Renderer = require('express-es6-template-engine');
app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server is running at http://${hostname}:${port}`);
});

const rootController = require('./routes/index');
// const usersController = require('./routes/users');
const tasksController = require('./routes/tasks');

app.use('/', rootController);
// app.use('/users', usersController);
app.use('/tasks', tasksController);
