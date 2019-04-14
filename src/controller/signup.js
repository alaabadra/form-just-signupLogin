exports.get = (req, res) => {
    // res.send('Server is runnig now');
    res.render('signup',{
        js: 'domSignup'
    })
}
