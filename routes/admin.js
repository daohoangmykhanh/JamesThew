var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller')
var post_controller = require('../controllers/post_controller')
var category_controller = require('../controllers/category_controller');
router.get('/', function(req, res, next) {
    res.render('admin/index', { title: 'Post' });
});

router.get('/post/index', new post_controller().getPost);


router.get('/category/index', function(req, res, next) {
    res.render('admin/category/index', { title: 'Category' });
  });

router.get('/tag/index', function(req, res, next) {
  res.render('admin/tag/index', { title: 'Tag' });
});

router.get('/user/index', new user_controller().getUser);
  
module.exports = router;