var express = require('express');
var router = express.Router();

/* GET users listing. */

router.get('/', function(req, res,next) {
  res.render('hello',  {myName:"Reece" });
});

router.get('/', function(req, res, next) {
  res.send('hi Reece');
});



module.exports = router;
