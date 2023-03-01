
module.exports = class middleware {
    requireLogin(req,res,next){
        if(req.session && req.session.userId){
            return next();
        } else {
            var err = 'You must be logged in to view this page'
            return res.redirect('/login');
        }
    }
    requireAdmin(req,res,next){
        if(req.session.userId == 1){
            return next();
        }else{
            var err = 'You must be logged as administrator to view this page'
            return res.redirect('/login');
        }
    }

}