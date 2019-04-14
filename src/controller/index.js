const router = require('express').Router();
//signup def
const signup = require('./signup.js');
const { validationSignup } = require('./middleware/validationSignup');
const { hashPassword } = require('./middleware/hashPassword')
const { signupVerification } = require('./middleware/signupVerification.js');
const { isFoundSignup } = require('./middleware/isFoundSignup.js');
const { addUserSignup } = require('./middleware/addUserSignup.js');
//login def
const login = require('./login.js');
const {isFoundForLogin} = require('./middleware/isFoundLogin.js');
//profile def//addPost def
const profile = require('./profile.js');
//signup
router.get('/signup', signup.get);
router.post('/signup', signupVerification, isFoundSignup,hashPassword, addUserSignup);

// router.get("/login", (req, res) => {
//     res.render('login',{
//         msg:'succefull'
//     })
// })
/////////////////////////////////////////////////
//login
router.get('/login',login.get);
router.post('/login',isFoundForLogin);
/////////////////////////////////////////////////
// //profile
router.get('/profile',profile.get)
//addPost
router.post('/profile',profile.post)
module.exports = router;