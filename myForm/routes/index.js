var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Form' });
});




router.post('/',function(req,res){
  console.log(req.body.title);
  console.log(req.body.description);
  res.send('users');
});



module.exports = router;
