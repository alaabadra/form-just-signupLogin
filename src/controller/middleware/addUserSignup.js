const addUser = require('../../model/querySignup/addUser.js');
exports.addUserSignup = (req,res,next)=>{
    console.log('add user',req.body);
    addUser(req.body.firstName,req.body.lastName,req.body.email,req.body.password).then(result=>{
       console.log(result.rows[0]);
        res.cookie("jwt", req.body.password);
        res.end();
    }).catch(err => next(err))
}
