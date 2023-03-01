var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller')
var post_controller = require('../controllers/post_controller')
var category_controller = require('../controllers/category_controller');
var subscribe_controller = require('../controllers/subscribe_controller');
const user = require('../models/entities/user');
const fileUpload = require('express-fileupload')
const middleware = require('../controllers/middleware')
// Config File Upload
router.use(fileUpload());
router.use(express.static('public'));

// Dashboard
router.get('/', new middleware().requireLogin, function(req, res, next) {
    res.render('admin/index');
});

// Post Router
router.get('/post/index', new middleware().requireLogin, new post_controller().getPost);
router.get('/post/create', new middleware().requireLogin,new post_controller().getCreate);
router.post('/post/create', new middleware().requireLogin,new post_controller().createPost);
router.get('/post/update/:id', new middleware().requireLogin,new post_controller().editPost);
router.post('/post/update/:id', new middleware().requireLogin,new post_controller().updatePost)
router.get('/post/delete/:id', new middleware().requireLogin,new post_controller().deletePost);

// Category Router
router.get('/category/index',new middleware().requireLogin,new category_controller().getCategory);
router.get('/category/create',new middleware().requireLogin,new category_controller().getCreate);
router.post('/category/create',new middleware().requireLogin,new category_controller().createCategory);
router.get('/category/update/:id', new middleware().requireLogin,new category_controller().editCategory);
router.post('/category/update/:id', new middleware().requireLogin,new category_controller().updateCategory)
router.get('/category/delete/:id', new middleware().requireLogin,new category_controller().deleteCategory);

// Comment Router
router.get('/comment/index', new middleware().requireLogin,function(req, res, next) {
  res.render('admin/comment/index', { title: 'Comment' });
});

// User Router
router.get('/user/index', new middleware().requireLogin,new user_controller().getUser);
router.get('/user/create', new middleware().requireLogin,new user_controller().getCreate);
router.post('/user/create', new middleware().requireLogin,new user_controller().createUser);
router.get('/user/update/:id', new middleware().requireLogin,new user_controller().editUser);
router.post('/user/update/:id', new middleware().requireLogin,new user_controller().updateUser)
router.get('/user/delete/:id', new middleware().requireLogin,new user_controller().deleteUser);

// Subscribe Router
router.get('/subscribe/index', new middleware().requireLogin, function(req, res, next) {
  res.render('admin/subscribe/index', { title: 'Subscribe' });
});
module.exports = router;