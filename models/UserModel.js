'use strict';

const db = require('./conn');
const bcrypt = require('bcryptjs');

class UserModel {
    constructor(id, name, username, password) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.password = password;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM users;`
            )
            return response;
        } catch (err) {
            console.error("Error: ", err);
        }
    }

    checkPassword(hashedPassword) {
        return bcrypt.compareSync(this.password, hashedPassword)
    }

    static async createNewUser(name, username, password) {
        try {
            const query = `INSERT INTO users
            (name, username, password)
            VALUES
                ('${name}', '${username}', '${password}')
                RETURNING id;`;
            const response = await db.one(query);
            return response;
        } catch (err) {
            console.error("Error: ", err);
            return err;
        }
    }

    async login() {
        try {
            const query = `SELECT * FROM users WHERE username = '${this.username}';`;
            const response = await db.one(query);
            const isValid = this.checkPassword(response.password);

            if (!!isValid) {
                const { id, username } = response;
                return { isValid, user_id: id, username }
            } else {
                return { isValid }
            }
        } catch (err) {
            console.error("Error: ", err);
            return err;
        }
    }
}

module.exports = UserModel;