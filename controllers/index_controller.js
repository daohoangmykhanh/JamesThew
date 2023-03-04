var db = require('../models/DbConnect')
var PostDao = require('../models/dao/postdao')
var CategoryDao = require('../models/dao/categorydao')
const TagDao = require('../models/dao/tagdao')
var UserDao = require('../models/dao/userdao')
var user = require('../models/entities/user')
var StatusDao = require('../models/dao/statusdao')
var CommentDao = require('../models/dao/commentdao')
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
                    post.TopPost((err, allRows) => {
                        if(err) throw  console.log(err)   
                        post.Top((err, top) => {
                            if(err) throw  console.log(err)   
                            res.render('index', {title: 'JamesThew Blog', dataPost: postRows, dataCate: cateRows, dataTag: tagRows, dataAll: allRows, top:top })   
                        })    
                        
                    })
                })
            });
        });
    }
    getDetail(req,res,next){
        var id = req.params.id;
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        var status = new StatusDao();
        var comment = new CommentDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Detail(id, (err, postRows) => {
                    if(err) throw console.log(err)
                    post.TopPost((err,allRows) => {
                        if(err) throw console.log(err)
                        status.All((err, statRows) => {
                            if(err) throw console.log(err)
                            comment.Post(id, (err,rows) => {
                                if(err) throw console.log(err)
                                comment.Count(id, (err,count) => {
                                    if(err) throw console.log(err)
                                    console.log(count)
                                    res.render('detail', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows, dataStat: statRows, rows:rows, count:count});
                                })
                            })
                        })
                    })
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
                    post.TopPost((err, allRows) => {
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows,title: 'Recipes'});
                    })
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
                    post.TopPost((err, allRows) => {
                        if(err) throw console.log(err)
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows, title: 'Categories', });
                    })
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
                    post.TopPost((err, allRows) => {
                        if(err) throw console.log(err)
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows, title: 'Tags'});
                    })
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
                    post.TopPost((err, allRows) => {
                        if(err) throw console.log(err)
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows,title: 'All Posts'});
                    })
                })
            });  
        });
    }

    getPostSub(req,res,next){
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Subscribe((err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    post.TopPost((err, allRows) => {
                        if(err) throw console.log(err)
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows,title: 'All Posts'});
                    })
                })
            });  
        });
    }
    
    searchPost(req,res,next){
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Search(req.body.input,(err, postRows) => {
                    if(err) throw console.log(err)
                    post.TopPost((err, allRows) => {
                        if(err) throw console.log(err)
                        res.render('blog', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows, dataAll: allRows,title: 'All Posts'});
                    })
                })
            });  
        });
    }
    postLogin(req,res,next){
        var dao = new UserDao();
        dao.Account(req.body.email,req.body.password,(err,data)=> {
            if (err){
                console.log(err)
                res.redirect('back')
            } else {
                req.session.userName = data[0].userName
                req.session.userEmail = data[0].userEmail
                req.session.roleId = data[0].roleId
                req.session.loginIs = true
                req.session.userId = data[0].userId
                console.log(req.session.loginIs)
                if(req.session.roleId == 1){
                    res.redirect('/admin/')
                } else if (req.session.roleId == 2){
                    res.redirect('/')
                } else if (req.session.roleId == 3){
                    res.redirect('/')
                }
                }
            })


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
    getProfile(req,res,next){
        var id = req.params.id;
        var dao = new UserDao();
        dao.Edit(id,(err, rows) => {
            if (err) throw console.log(err)
            res.render('profile', {data: rows})
        }) 
    }
    postProfile(req,res,next){
        var id = req.params.id;
        var dao = new UserDao();
        var item = new user(req.body.name,req.body.email,req.body.password);
        dao.Profile(id,item,(err) => {
            if (err) throw console.log(err)
            console.log('update successfully')
        });
        res.redirect('back');
    }

    getSubscribe(req,res,next){
        var id = req.params.id;
        var dao = new UserDao();
        dao.Edit(id,(err, rows) => {
            if(err) throw console.log(err)
            res.render('subscribe', {data:rows})
        })
    }
}