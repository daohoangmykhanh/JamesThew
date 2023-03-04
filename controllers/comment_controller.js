const comment = require('../models/entities/comment');
const CommentDao = require('../models/dao/commentdao');
module.exports = class comment_controller {
    getCommnet(req, res, next) {
        var dao = new CommentDao();
        dao.All((err, rows) => {
            if (err) throw console.log(err)
            res.render('admin/comment/index', {data: rows} )
        });
    }
    createComment(req,res,next){
        var id = req.params.id;
        var userId = req.session.userId
        let currentDate = new Date().toJSON().slice(0, 10);
        var dao = new CommentDao();
        var com = new comment(userId,id,req.body.status,req.body.content,currentDate);
        dao.Create(com,(err) => {
            if (err) throw  console.log(err)
        });
        res.redirect('back')
    }
}