const category = require('../models/entities/category');
const CategoryDao = require('../models/dao/categorydao');
module.exports = class user_controller {
    getPost(req, res, next) {
        var dao = new CategoryDao();
        dao.All((err, rows) => {
            if (err){
                console.log(err)
            }else {
                res.render('admin/category/index', {data: rows} )
            }
        });
    }
}