const express = require('express');
const hbs = require('express-handlebars');
const { join } = require('path');
const bodyparser = require('body-parser');
const cookieparser=require('cookie-parser')
const controller= require('./controller');
// const favicon = require('serve-favicon');
///////////////////////////////////////////
//instanse of express
const app = express();
//set views
app.set('views', join(__dirname, "views"));
app.set('view engine', 'hbs');

app.engine(
    'hbs',
    hbs({
        extname: 'hbs',
        layoutsDir: join(__dirname, 'views', "layouts"),
        partialsDir: join(__dirname, 'views',"partials"),
        defaultLayout:"main"
    })
)
//use
//req
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// app.post('/signup',(req, res, next) => {
//     console.log('request reach',req.body);
//     next();
// })
//use cookieparser
app.use(cookieparser())
//use public
app.use(express.static(join(__dirname,"..","public")));
//favicon
// app.use(favicon(join(__dirname, '..', 'public','img' ,'logo.svg')));
//use controller
app.use(controller)
//set port
app.set('port',process.env.PORT||3600);
app.listen(app.get("port"),()=>{
    console.log(`server on port :${app.get("port")}`);
    
})
module.exports = app;