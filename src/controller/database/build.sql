
BEGIN;
DROP TABLE IF EXISTS users,posts CASCADE;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(18) NOT NULL,
    last_name VARCHAR(18),
    email VARCHAR NOT NULL UNIQUE,
    password VARCHAR NOT NULL
);
CREATE TABLE posts(
    id SERIAL PRIMARY KEY,
    details_post TEXT NOT NULL,
    user_id INTEGER REFERENCES users(id)
);
INSERT INTO posts(details_post,user_id) VALUES
('ana alaa', 1);
INSERT INTO users(first_name,last_name,email,password) VALUES ('ALAA','BADRA','alaabadra@hotmail.com','123'); 
COMMIT;
