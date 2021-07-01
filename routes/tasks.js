const express = require('express');
const router = express.Router();
const TasksModel = require('../models/Tasks'); 

router.get('/', async (req, res) => {
    const theTasks = await TasksModel.getAllTasks();
    res.render('template', {
        locals: {
            title: 'Tasks Page',
            task_data: theTasks,
            is_logged_in: req.session.is_logged_in,
            user_id: req.session.user_id
        },
        partials: {
            body: 'partials/tasks'
        }
    })
});

module.exports = router;