function adminAuth(req, res, next){
    if(req.session.admin != undefined){
        
         next();
       
    }else{
        req.session= undefined
        res.redirect("/");
    }
 }
 
 module.exports = adminAuth