const dbconnection = require('../../controller/database/db_connection.js');
const addPost = (post,userId)=> {
    return dbconnection.query(`INSERT INTO posts (post,user_id) VALUES ($1 , $2) returning *`,[post,userId]);
}
module.exports = addPost;