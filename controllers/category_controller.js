const category = require('../models/entities/category');
const CategoryDao = require('../models/dao/categorydao');
const TagDao = require('../models/dao/tagdao');
module.exports = class user_controller {
    getCategory(req, res, next) {
        var cate = new CategoryDao();
        cate.All((err, rowsCate) => {
            if (err) throw console.log(err)
            var tag = new TagDao(); 
            tag.All((err,rowsTag) =>{
                if (err) throw console.log(err)
                res.render('admin/category/index', {dataCate: rowsCate, dataTag: rowsTag} )
            })   
        });
    }
    getCreate(req, res, next){
        res.render('admin/category/create')
    }
    createCategory(req,res,next){
        var dao = new CategoryDao();
        var cate = new category(req.body.name);
        dao.Create(cate,(err) => {
            if (err) throw console.log(err)
        });
        res.redirect('index')
    }
    editCategory(req,res,next){
        var id = req.params.id;
        var dao = new CategoryDao();
        dao.Edit(id, (err,rows) => {
            if(err) throw console.log(err)
            console.log(rows[0])
            res.render('admin/category/update', {data: rows});
        })
    }
    updateCategory(req,res,next){
        var id = req.params.id;
        console.log(id)
        var dao = new CategoryDao();
        var cate = new category(req.body.name);
        dao.Update(id,cate,(err) => {
            if (err) throw console.log(err)
            console.log('update successfully')
            res.redirect('/admin/category/index')
        });
    
    }
    deleteCategory(req,res, next){
        var id = req.params.id;
        var dao = new CategoryDao();
        dao.Delete(id, (err) => {
            if(err) throw console.log(err)
            console.log('Delete successfully!!!');
        })
        res.redirect('/admin/category/index')
    }
}