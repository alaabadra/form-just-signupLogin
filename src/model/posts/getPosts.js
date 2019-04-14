const dbconnection = require('../../controller/database/db_connection.js');
const getPost = () =>
  dbconnection.query(
    "select posts.details_post, users.first_name, users.last_name from posts JOIN users ON users.id = posts.user_id"
  );

module.exports = getPost;