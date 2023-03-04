const contact = require('../models/entities/contact');
const ContactDao = require('../models/dao/contactdao');
module.exports = class contact_controller {
    getContact(req, res, next) {
        var cate = new ContactDao();
        cate.All((err, rows) => {
            if (err) throw console.log(err)
            res.render('admin/contact/index', {data: rows})   
        });
    }
    createContact(req,res,next){
        var dao = new ContactDao();
        var cont = new contact(req.body.name);
        dao.Create(cont,(err) => {
            if (err) throw console.log(err)
        });
        res.redirect('/contact')
    }
}