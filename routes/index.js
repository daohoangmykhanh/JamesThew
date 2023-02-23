var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'JamesThew Blog' });
});

router.get('/contact', function(req, res, next){
  res.render('contact', { title: 'Contact Us'})
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log In' });
});

router.get('/register',function(req, res,next){
  res.render('register',{title:'Register'})
});

module.exports = router;
