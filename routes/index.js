var express = require('express');
var router = express.Router();
var index_controller = require('../controllers/index_controller')

/* GET home page. */
router.get('/', new index_controller().getIndex);
router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Us'})
});
router.get('/about', function(req, res, next){
  res.render('about', { title: 'About Us'})
});

// AUTH Router
router.get('/login', function(req, res, next) {
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
router.get('/posts', new index_controller().getPost)

// Comment Router
router.get('/blog/detail/:id/comment/create')
// Test connection
router.get('/api', new index_controller().getApi);
module.exports = router;
