var express = require('express');
var router = express.Router();
//var myJokes =[];

/* GET home page. */
router.get('/jokes', function(req, res, next) {

  console.log(myJokes);

  if(!req.session.hasOwnProperty('myJokes')){
    var myJokes = [];
    console.log("new Session", myJokes);
  }

  else{
    console.log("old session")

  }
  res.render('jokes', { title: 'Jokes',lists: myJokes });

  });

router.post('/jokes',function(req,res,next){
  var myJoke = req.body.joke;
  myJokes.push(myJoke);
  res.render('jokes', {lists: myJokes});
  
});



module.exports = router;
