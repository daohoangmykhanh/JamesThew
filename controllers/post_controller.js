const post = require('../models/entities/post');
const PostDao = require('../models/dao/postdao');
module.exports = class user_controller {
    getPost(req, res, next) {
        var dao = new PostDao();
        dao.All((err, rows) => {
            if (err){
                console.log(err)
            }else {
                res.render('admin/post/index', {data: rows} )
            }
        });
    }
}