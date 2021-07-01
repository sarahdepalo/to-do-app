const db = require('./conn.js');

class Tasks {
    constructor(id, user_id, task_name, task_description, completion_status) {
        this.id = id;
        this.user_id = user_id;
        this.task_name = task_name;
        this.task_description = task_description;
        this.completion_status = completion_status;
    }

    static async getAllTasks() {
        try {
            const response = await db.any(`SELECT * FROM tasks WHERE user_id = '${this.user_id}';`)
            return response;
        } catch (error) {
            console.error('ERROR:', error);
        }
    };

    async addTask() {
        try {
            const response = await db.result (
                `INSERT INTO tasks
                    (task_name, task_description, user_id)
                VALUES
                    ('${this.task_name}', '${this.task_description}', ${this.user_id});
                `
            )
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }


    // Need to add a function to delete tasks/update them 
    async updateTask() {
        // Add an if statement here that checks if an object has been marked complete?
        // A button will then change the status with this function? 
        try {
            const response = await db.any(
                `UPDATE tasks 
                SET completion_status = true
                WHERE user_id = '${this.user_id}';`
            )
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error
        }
    }

}

module.exports = Tasks;