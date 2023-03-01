var db = require('../models/DbConnect')
var PostDao = require('../models/dao/postdao')
var CategoryDao = require('../models/dao/categorydao')
const TagDao = require('../models/dao/tagdao')
var UserDao = require('../models/dao/userdao')
var user = require('../models/entities/user')
var auth = require('../models/entities/auth')
module.exports = class index_controller {
    getApi(req, res, next) {
       var con = new db().getConnect()
       con.connect(function(err) {
        if (err) throw console.log(err)
        console.log("Connect!")
      });
    }
    getIndex(req,res,next){
        var post = new PostDao();
        post.Top((err, postRows) => {
            if (err) throw  console.log(err)
            var category = new CategoryDao();
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                var tag = new TagDao();
                tag.All((err, tagRows) => {
                    if(err) throw  console.log(err)
                    if(req.session.userName){
                        var userName = req.session.userName;
                        res.render('index', {title: 'JamesThew Blog', dataPost: postRows, dataCate: cateRows, dataTag: tagRows, userName: userName })    
                    } else {
                        var userName = req.session.userName;
                        res.render('index', {title: 'JamesThew Blog', dataPost: postRows, dataCate: cateRows, dataTag: tagRows})   
                    }
                })
            });
        });
    }
    getDetail(req,res,next){
        var id = req.params.id;
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Detail(id, (err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('detail', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows});
                    
                })
            });  
        });
    }
    getRecipe(req,res,next){
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Recipe((err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, title: 'Recipes'});
                })
            });  
        });
    }
    getCategory(req,res,next){    
        var id = req.params.id;
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Category(id,(err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, title: 'Categories'});
                })    
            });  
        });
    }
    getTag(req,res,next){
        var id = req.params.id;
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Tag(id,(err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, title: 'Tags'});
                })
            });  
        });
    }
    getPost(req,res,next){
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.All((err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, title: 'All Posts'});
                })
            });  
        });
    }
    postLogin(req,res,next){
        var dao = new UserDao();
        dao.Account(req.body.email,req.body.password,(err,data)=> {
            if (err) throw console.log(err)
            console.log(data)
            if (data){
                req.session.userName = data[0].userName
                req.session.userEmail = data[0].userEmail
                req.session.roleId = data[0].roleId
                req.session.loginIs = true
                console.log(req.session)
            } else { 
                res.render('login')  
            } 
        })
        if (req.session.roleId = 2){
            res.redirect('/')
        } else if (req.session.roleId = 3) {
            res.redirect('/')
        } else if (req.session.roleId = 1){
            res.redirect('/admin')
        } else {
            res.redirect('/login')
        }


    }
    postRegister(req,res,next){
        var dao = new UserDao();
        var userItem = new user(req.body.name,req.body.email,req.body.password,2)
        dao.Create(userItem,(err) => {
            if (err) throw console.log(err)
        })
        res.redirect('/login')
    }
    getLogout(req,res,next){
        req.session.destroy();
        res.redirect('/login');
    }
}