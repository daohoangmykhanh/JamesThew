var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/user_controller')
var post_controller = require('../controllers/post_controller')
var category_controller = require('../controllers/category_controller');
var subscribe_controller = require('../controllers/subscribe_controller');
const user = require('../models/entities/user');
const fileUpload = require('express-fileupload')
const middleware = require('../controllers/middleware')
const tag_controller = require('../controllers/tag_controller')
const contact_controller = require('../controllers/contact_controller')
const comment_controller = require('../controllers/comment_controller')
// Config File Upload
router.use(fileUpload());
router.use(express.static('public'));

// Dashboard
router.get('/', new middleware().requireAdmin , new subscribe_controller().getDashboard);

// Post Router
router.get('/post/index' ,new middleware().requireAdmin ,new post_controller().getPost);
router.get('/post/create',new middleware().requireAdmin  , new post_controller().getCreate);
router.post('/post/create',new middleware().requireAdmin  , new post_controller().createPost);
router.get('/post/update/:id',new middleware().requireAdmin , new post_controller().editPost);
router.post('/post/update/:id',new middleware().requireAdmin , new post_controller().updatePost)
router.get('/post/delete/:id',new middleware().requireAdmin  ,new post_controller().deletePost);

// Category Router
router.get('/category/index',new middleware().requireAdmin ,new category_controller().getCategory);
router.get('/category/create', new middleware().requireAdmin ,new category_controller().getCreate);
router.post('/category/create',new middleware().requireAdmin ,new category_controller().createCategory);
router.get('/category/update/:id', new middleware().requireAdmin ,new category_controller().editCategory);
router.post('/category/update/:id',new middleware().requireAdmin , new category_controller().updateCategory)
router.get('/category/delete/:id', new middleware().requireAdmin ,new category_controller().deleteCategory);

// Tag Router
router.get('/tag/create',new middleware().requireAdmin , new tag_controller().getCreate);
router.post('/tag/create',new middleware().requireAdmin ,new tag_controller().createTag);
router.get('/tag/update/:id',new middleware().requireAdmin , new tag_controller().editTag);
router.post('/tag/update/:id',new middleware().requireAdmin , new tag_controller().updateTag)
router.get('/tag/delete/:id', new middleware().requireAdmin ,new tag_controller().deleteTag);

// Comment Router
router.get('/comment/index', new middleware().requireAdmin ,new comment_controller().getCommnet);

// User Router
router.get('/user/index',new middleware().requireAdmin , new user_controller().getUser);
router.get('/user/create',new middleware().requireAdmin , new user_controller().getCreate);
router.post('/user/create',new middleware().requireAdmin , new user_controller().createUser);
router.get('/user/update/:id',new middleware().requireAdmin , new user_controller().editUser);
router.post('/user/update/:id',new middleware().requireAdmin , new user_controller().updateUser)
router.get('/user/delete/:id',new middleware().requireAdmin , new user_controller().deleteUser);

// Contact Router
router.get('/contact/index',new middleware().requireAdmin , new contact_controller().getContact);
router.post('/contact/create', new middleware().requireAdmin ,new contact_controller().createContact);

// Subscribe Router
router.get('/subscribe/index', new middleware().requireAdmin ,new subscribe_controller().getSubscribe);

module.exports = router;