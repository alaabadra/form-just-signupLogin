const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const getUser = require('../../model/queryLoginSignup/getUser.js')
console.log('ooo');
exports.isFoundForLogin = (req, res, next) => {
    console.log('aa')
    console.log(req.body.email);
    getUser(req.body.email).then(result => {
        if (!result.rows[0]) {
            console.log('not register');
            res.end()
            // return res.send('you not register in this website,you must go into sign up not here')
        } else {
            console.log(result.rows[0].password); 
            // console.log(req.body.password);
            bcrypt.compare(req.body.password, result.rows[0].password, (err, isOk) => {
                if (err) {
                    res.render('login', {
                        msg: 'internal server error'
                    })
                } else {
                    const userInfo = {
                        userId: result.rows[0].id,
                        email: result.rows[0].email
                    }
                    console.log(userInfo);
                    jwt.sign(userInfo, process.env.SECRET, (err, cookieEnc) => {
                        console.log(cookieEnc);//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoiYWxhYTE5OTU4ODFAaG90bWFpbC5jb20iLCJpYXQiOjE1NTUwMDMyODl9.Y0Mez6aMTyd12IvaHyzv712lgnxegO2reZnqGsnD5Lg
                        if (cookieEnc) {
                            console.log('kkkk');
                           
                            res.cookie('jwt', cookieEnc, { maxAge: 10 * 50 * 1000 });
                            res.end();
                            console.log('cookie');
                            
                            // return res.redirect('/profile');
                        } else {
                            res.render('login', {
                                msg: 'internal server error'
                            })
                        }
                    })
                }
            })

        }
    }).catch(err => next(err));
}