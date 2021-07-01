CREATE TABLE users (
    id serial PRIMARY KEY,
    name text,
    username text NOT NULL,
    password varchar(2000)
);

CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task_name text,
    task_description text,
    completion_status boolean DEFAULT FALSE,
    user_id INTEGER REFERENCES users(id)
);