const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');


router.get('/users/register', (req, res) => {
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

router.get('/users/login', (req, res) => {
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

router.post('users/signup', async (req,res) =>)