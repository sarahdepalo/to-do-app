CREATE TABLE users (
    id serial PRIMARY KEY,
    name text,
    username text NOT NULL,
    password varchar(2000)
);

CREATE TABLE tasks (
    id serial PRIMARY KEY,
    task_name text,
    task_description,
    completion_status boolean DEFAULT FALSE,
    user_id text REFERENCES users(id),
);