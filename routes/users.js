const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const UserModel = require('../models/UserModel');


router.get('/signup', (req, res) => {
    res.render('template', {
        locals: {
            title: "New User Registration",
            is_logged_in: req.session.is_logged_in

        },
        partials: {
            body: 'partials/signup'
        }
    });
})

router.get('/login', (req, res) => {
    res.render('template', {
        locals: {
            title: 'User Login',
            is_logged_in: req.session.is_logged_in

        },
        partials: {
            body: 'partials/login'
        }
    });
})

router.post('/signup', async (req,res) => {
    const { name, username, password } = req.body;

    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const response = await UserModel.createNewUser(name, username, hash);

    if (response.id) {
        res.redirect('/users/login');
    } else {
        res.status(500).send("ERROR: Please try resubmitting the form.");
    }
});

router.post('/users/login', async (req, res) => {
    const { username, password} = req.body;
    const user = new UserModel(null, null, username, password);
    const response = await user.login();

    if(!!response.isValid) {
        const { isValid, user_id, username } = response;

        req.session.is_logged_in = isValid;
        req.session.user_id = user_id;
        req.session.username = username;
        res.redirect('/tasks');
    } else {
        res.sendStatus(403);
    }
});

router.get('/users/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
})


module.exports = router;