const tag = require('../models/entities/tag');
const TagDao = require('../models/dao/tagdao');
module.exports = class tag_controller {
    createTag(req,res,next){
        var dao = new TagDao();
        var tagItem = new tag(req.body.name);
        dao.Create(tagItem,(err) => {
            if (err) throw console.log(err)
        });
        res.redirect('index')
    }
    getCreate(req, res, next){
        res.render('/admin/category/index')
    }
    editTag(req,res,next){
        var id = req.params.id;
        var dao = new TagDao();
        dao.Edit(id, (err,rows) => {
            if(err) throw console.log(err)
            console.log(rows[0])
            res.render('admin/tag/update', {data: rows});
        })
    }
    updateTag(req,res,next){
        var id = req.params.id;
        console.log(id)
        var dao = new TagDao();
        var tagItem = new tag(req.body.name);
        dao.Update(id,tagItem,(err) => {
            if (err) throw console.log(err)
            console.log('update successfully')
        });
        res.redirect('/admin/category/index')
    
    }
    deleteTag(req,res, next){
        var id = req.params.id;
        var dao = new TagDao();
        dao.Delete(id, (err) => {
            if(err) throw console.log(err)
            console.log('Delete successfully!!!');
        })
        res.redirect('/admin/category/index')
    }
}