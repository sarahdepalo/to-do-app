const express = require('express');
const router = express.Router();
// Don't forget to import model here later

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
            title: 'Home Page!!'
        },
        partials: {
            body: 'partials/home'
        }
    })
});

module.exports = router;