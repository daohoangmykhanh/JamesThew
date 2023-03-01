const post = require('../models/entities/subscribe');
const SubscribeDao = require('../models/dao/subscribedao');
module.exports = class subscribe_controller {
    getPost(req, res, next) {
        var dao = new SubscribeDao();
        dao.All((err, rows) => {
            if (err){
                console.log(err)
            }else {
                res.render('admin/subscribe/index', {data: rows} )
            }
        });
    }
}