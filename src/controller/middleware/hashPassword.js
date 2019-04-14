const bcrypt = require('bcryptjs');
exports.hashPassword = (req,res,next)=> {
    bcrypt.hash(req.body.password,5,(err,hashPass)=>{
        console.log(hashPass);//$2a$05$GJR67DIXA4VXQp1DYsy72OaUvWVIbp4OSVhVW1fDbIzqwTkDPoDhi     
        if(hashPass){
            req.body.password = hashPass;
            next();
        }else{
            res.render('signup',{
                msg:'internal server error'
            })
        }
    })
}