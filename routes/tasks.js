const express = require('express');
const router = express.Router();
const TasksModel = require('../models/Tasks'); 

router.get('/', async (req, res) => {

    const theTasks = await TasksModel.getAllTasks();
    res.render('template', {
        locals: {
            title: 'Tasks Page',
            data: theTasks
        },
        partials: {
            body: 'partials/tasks'
        }
    })
});

module.exports = router;