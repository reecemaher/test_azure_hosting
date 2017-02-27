var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Jokes' });
});

router.post('/users',function(req,res,next){
 // var myJoke = req.body.joke;
  var myJokes =["hi","well"];
  //myJokes.push(myJoke);

  res.render('users',{myJokes});
  
});

module.exports = router;
