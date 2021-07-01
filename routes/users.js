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


module.exports = router;