// exports.get = (req,res,next)=>{
//     res.render('profile')
// }


const getPosts = require("../model/posts/getPosts.js");
const { verify } = require("jsonwebtoken");
exports.get = (req, res, next) => {
    console.log('here profile');
   
  verify(req.cookies.jwt, process.env.SECRET, (err, token) => {
   console.log('verify');
   
    if (err) res.redirect("/login");
    else
      getPosts()
        .then(result => {
            console.log(result);
            // console.log(result.rows[0].first_name);
            
          res.render("profile", {
            posts: result.rows[0],
            // js:'domAddPost'
          });
        })
        .catch(err => {
          next(err);
        });
  });
};


exports.post = (req,res,next) => {
  jwt.verify(req.cookies.jwt,process.env.SECRET,(err,encCookie)=>{
      if(!encCookie){
          res.redirect('/login');
      }else{
          console.log('here post');
          console.log('request',req.body);
          
          addPost(req.body).then(result=>{
              console.log(result);
              
              if(result.rows){
                  res.send('add successfully')
              }
          }).catch(err=>next(err));
      }
  })
  }