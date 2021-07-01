<<<<<<< HEAD
const express = require('express');
const router = express.Router();
// Don't forget to import model here later
=======
'use strict';

const express = require('express');
const router = express.Router();
>>>>>>> 64bdbb5f08df9b536d0319d6f5c3d4c9e3a9489f

router.get('/', async (req, res) => {
    res.render('template', {
        locals: {
<<<<<<< HEAD
            title: 'Home Page!!'
=======
            title: 'Home Page'
>>>>>>> 64bdbb5f08df9b536d0319d6f5c3d4c9e3a9489f
        },
        partials: {
            body: 'partials/home'
        }
<<<<<<< HEAD
    })
});

module.exports = router;
=======

    })
})
module.exports=router;
>>>>>>> 64bdbb5f08df9b536d0319d6f5c3d4c9e3a9489f
