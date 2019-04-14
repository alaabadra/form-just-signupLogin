const bcrypt = require('bcryptjs');
const getUser = require('../../model/queryLoginSignup/getUser');

exports.isFoundSignup = (req,res,next) => {
    // console.log('req in is found',req.body.email);
    
    getUser(req.body.email).then(result=>{
        console.log(result);
        
        if(result.rows[0]){
            console.log('existtt');
            res.send('this user is found')
        }else{
            console.log('not exist');
            next();
        }
    }).catch( err => next(err));
}