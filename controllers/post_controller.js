const post = require('../models/entities/post');
const PostDao = require('../models/dao/postdao');
const CategoryDao = require('../models/dao/categorydao');
const TagDao = require('../models/dao/tagdao');
var path = require('path');

module.exports = class post_controller {
    getPost(req, res, next) {
        var dao = new PostDao();
        dao.All((err, rows) => {
            if (err) throw  console.log(err)
            res.render('admin/post/index', {data: rows} )
        });
    }
    getCreate(req, res, next){
        var category = new CategoryDao();
        var tag = new TagDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw  console.log(err)
                res.render('admin/post/create', {dataCate: cateRows, dataTag:tagRows} )
            });  
        });
    }
    createPost(req,res,next){
        var subscribe;
        let currentDate = new Date().toJSON().slice(0, 10);
        if ( req.body.subscribe == 1){
            subscribe = true;
        }else {
            subscribe = false;
        }
        const ext_name = path.extname(req.files.image.name);
        image_name = Date.now() + ext_name;
        req.files.image.mv('public/uploads/' + image_name);
     
        var dao = new PostDao();
        var postItem = new post(req.body.name,image_name,req.body.description,req.body.content,req.body.tagId,req.body.categoryId, subscribe, currentDate )
        dao.Create(postItem,(err) => {
            if (err) throw console.log(err)
        })
        res.redirect('/admin/post/index')
    }

    editPost(req,res,next){
        var id = req.params.id;
        var category = new CategoryDao();
        var tag = new TagDao();
        var post = new PostDao();
        tag.All((err, tagRows) => {
            if (err) throw console.log(err)
            category.All((err, cateRows) => {
                if (err) throw console.log(err)
                post.Edit(id, (err, postRows) => {
                    if(err) throw console.log(err)
                    console.log(postRows)
                    res.render('admin/post/update', {dataCate: cateRows, dataTag: tagRows, dataPost : postRows});
                })
            });  
        });
    }
    updatePost(req,res,next){
        var subscribe;
        var item;
        if ( req.body.subscribe == 1){
            subscribe = true;
        }else {
            subscribe = false;
        }
        var id = req.params.id;
        let currentDate = new Date().toJSON().slice(0, 10);
        if (req.files.image.name){
            const ext_name = path.extname(req.files.image.name);
            const image_name = Date.now() + ext_name;
            req.files.image.mv('public/uploads/' + image_name);
            var item = new post(req.body.name,image_name,req.body.description,req.body.content,req.body.tagId,req.body.categoryId,subscribe,'', currentDate );
        } else {
            var item = new post(req.body.name,'',req.body.description,req.body.content,req.body.tagId,req.body.categoryId,subscribe,'', currentDate ); 
        }
        var dao = new PostDao();
        
        dao.Update(id,item,(err) => {
            if (err) throw console.log(err)
            console.log('update successfully')
        });
        res.redirect('/admin/post/index')
    
    }
    deletePost(req,res, next){
        var id = req.params.id;
        var dao = new PostDao();
        dao.Delete(id, (err) => {
            if(err){
                console.log(err)
            }else {
                console.log('Delete successfully!!!');
            }
        })
        res.redirect('/admin/post/index')
    }

}