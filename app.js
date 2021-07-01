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

app.use('/', rootController);
<<<<<<< HEAD
// app.user('/users', usersController);
=======
// app.use('/users', usersController);
>>>>>>> 64bdbb5f08df9b536d0319d6f5c3d4c9e3a9489f
