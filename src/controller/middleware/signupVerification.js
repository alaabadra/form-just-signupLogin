const jwt = require('jsonwebtoken');
exports.signupVerification = (req, res, next) => {
    // console.log('req in verify',req.body);
    
    if (req.cookie && req.cookie.jwt) {//login before that it 
        jwt.verify(req.cookie, process.env.SECRET, (err, token) => {//check your cookie
            if (err) {//this error because you unath
                res.send('you unathourized');
            } else {//you just forget that you login before that it 
                res.send('you made registration in ths web ,so you just need login now')
            }
        })
    }else{
        next();
    }
}