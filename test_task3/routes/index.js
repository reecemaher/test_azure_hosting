var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/jokes',function(req,res,next){
  var myJoke = req.body.joke;

  res.render('jokes',{jokeList:myJoke})
  
});



module.exports = router;
