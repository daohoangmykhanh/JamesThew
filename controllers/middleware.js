
module.exports = class middleware {
    requireLogin(req,res,next){
        if(req.session && req.session.userId){
            return next();
        } else {
            var err = 'You must be logged in to view this page'
            return res.redirect('/login');
        }
    }
    checkLogin(req,res,next){
        if(req.session && req.session.userId){
            return res.redirect('back');
        } else {
            return next();
        }
    }
    requireAdmin(req,res,next){
        if(req.session.roleId == 1){
            return next();
        }else{
            var err = 'You must be logged as administrator to view this page'
            return res.redirect('/login');
        }
    }
    checkSub(req,res,next){
        if(req.session.roleId == 1 || req.session.roleId == 3){
            return next();
        }else if (req.session.roleId == 2){
            res.redirect('/subscribe/'+ req.session.userId)
        } else {
            res.redirect('/login')
        }
    }

}