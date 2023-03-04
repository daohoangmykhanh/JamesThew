var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index_controller')
var subscribe_controller = require('../controllers/subscribe_controller')
var comment_controller = require('../controllers/comment_controller')
var middleware = require('../controllers/middleware')
/* GET home page. */
router.get('/', new index_controller().getIndex);
router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Us'})
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About Us'})
});

// Profile Router
router.get('/profile/:id', new index_controller().getProfile)
router.post('/profile/:id', new index_controller().postProfile)

// AUTH Router
router.get('/login', new middleware().checkLogin, function(req, res, next) {
  res.render('login', { title: 'Log In' });
});
router.post('/login', new index_controller().postLogin)
router.get('/register',function(req, res,next){
  res.render('register',{title:'Register'})
});
router.post('/register', new index_controller().postRegister)
router.get('/logout', new index_controller().getLogout)

// Post Router
router.get('/blog/detail/:id', new index_controller().getDetail);
router.get('/recipes', new index_controller().getRecipe)
router.get('/category/:id', new index_controller().getCategory)
router.get('/tag/:id', new index_controller().getTag)
router.get('/post-sub',new middleware().checkSub, new index_controller().getPostSub)
router.get('/posts', new index_controller().getPost)
router.post('/search/', new index_controller().searchPost)
// Subscribe Router 
router.get('/subscribe/:id', new middleware().requireLogin,new index_controller().getSubscribe)
router.post('/subscribe/:id', new middleware().requireLogin,new subscribe_controller().createSubscribe)

// Comment Router
router.post('/comment/:id', new middleware().requireLogin,new comment_controller().createComment)

// Test connection
router.get('/api', new index_controller().getApi);
module.exports = router;
