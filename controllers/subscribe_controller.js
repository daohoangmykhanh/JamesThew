const subscribe = require('../models/entities/subscribe');
const SubscribeDao = require('../models/dao/subscribedao');
const UserDao = require('../models/dao/userdao');
const ContactDao = require('../models/dao/contactdao');
const PostDao = require('../models/dao/postdao');
module.exports = class subscribe_controller {
    getSubscribe(req, res, next) {
        var dao = new SubscribeDao();
        dao.All((err, rows) => {
            if (err) throw  console.log(err)
            res.render('admin/subscribe/index', {data: rows} )
        });
    }
    createSubscribe(req,res,next){
        var id = req.params.id;
        let currentDate = new Date().toJSON().slice(0, 10);
        var price;
        var dao = new SubscribeDao();
        if (req.body.name == '1 month'){
            price = 10;
        } else if (req.body.name == '3 months'){
            price = 20; 
        } else if (req.body.name == '5 months'){
            price = 50;
        } else{
            price = 0;
        }
        var sub = new subscribe(req.body.name,id,req.body.payment, currentDate, price);
        dao.Create(sub,(err) => {
            if (err) throw console.log(err)
        });
        res.redirect('back')
    }
    getDashboard(req, res, next) {
        var sub = new SubscribeDao();
        sub.Count((err, rowsSub) => {
            if (err) throw  console.log(err)
            var user = new UserDao();
            user.Count((err,rowsUser) => {
                if (err) throw  console.log(err)
                var post = new PostDao();
                post.Count((err, rowsPost) => { 
                    if (err) throw  console.log(err)
                    var contact = new ContactDao();
                    contact.Count((err, rowsContact) => { 
                        if (err) throw  console.log(err)  
                        res.render('admin/index', {rowsSub: rowsSub, rowsUser:rowsUser, rowsPost:rowsPost, rowsContact: rowsContact} )
                    })
                })
            })
        });
    }
}