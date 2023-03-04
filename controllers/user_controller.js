const user = require('../models/entities/user');
const UserDao = require('../models/dao/userdao');
const RoleDao = require('../models/dao/roledao')
module.exports = class user_controller {
    getUser(req, res, next) {
        var dao = new UserDao();
        dao.All((err, rows) => {
            if (err) throw err;
            res.render('admin/user/index', {data: rows} )
        });
    }
    getCreate(req, res, next){
        var dao = new RoleDao();
        dao.All((err, rows) => {
            if (err) throw err;
            res.render('admin/user/create', {data: rows})
        });
    }
    createUser(req,res, next){
        var dao = new UserDao();
        var userItem = new user(req.body.name,req.body.email,req.body.password,req.body.roleId)
        dao.Create(userItem,(err) => {
            if (err) throw console.log(err)
        })
        res.redirect('/admin/user/index') 
    }
    editUser(req,res,next){
        var id = req.params.id;
        var user = new UserDao();
        var role = new RoleDao();
        role.All((err, roleRows) => {
            if (err) throw console.log(err)
            user.Edit(id, (err, userRows) => {
                if(err) throw console.log(err)
                res.render('admin/user/update', {dataUser: userRows, dataRole: roleRows});
            })
        });
    }
    updateUser(req,res,next){
        var id = req.params.id;
        var dao = new UserDao();
        var item = new user(req.body.name,req.body.email,req.body.password,req.body.roleId);
        dao.Update(id,item,(err) => {
            if (err) throw console.log(err)
            console.log('update successfully')
        });
        res.redirect('/admin/user/index')
    
    }
    deleteUser(req,res, next){
        var id = req.params.id;
        var dao = new UserDao();
        dao.Delete(id, (err) => {
            if(err) throw console.log(err)
            console.log('Delete successfully!!!');
        })
        res.redirect('/admin/user/index')
    }
}