var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('jokes', { title: 'Jokes' });
/*
  console.log("req.session.myJokes:" + req.session.myJokes);

  if(!req.session.hasOwnProperty('myJokes')){
    var myJokes = [];
    console.log("new Session", myJokes);
    
  }*/
});

router.post('/jokes',function(req,res,next){
  var myJoke = req.body.joke;

  res.render('jokes',{jokeList:myJoke});
  
});



module.exports = router;
