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
        let currentDate = new Date().toJSON().slice(0, 10);
        var dao = new CommentDao();
        var com = new comment(req.body.userId,req.body.postId,req.body.statusId,req.body.content,currentDate);
        dao.Create(com,(err) => {
            if (err) throw  console.log(err)
        });
    }
}