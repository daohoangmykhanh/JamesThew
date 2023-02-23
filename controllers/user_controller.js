const user = require('../models/entities/user');
const UserDao = require('../models/dao/userdao');
module.exports = class user_controller {
    getUser(req, res, next) {
        var dao = new UserDao();
        dao.All((err, rows) => {
            if (err){
                console.log(err)
            }else {
                res.render('admin/index', {data: rows} )
            }
        });
    }
}