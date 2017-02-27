var express = require('express');
var router = express.Router();
//myJokes =[];
var fin = false;
/* GET home page. */
router.get('/jokes', function(req, res, next) {

  req.session.myJokes;

  if(!req.session.hasOwnProperty('myJokes')){
    req.session.myJokes = ["Working Session"];
    console.log(req.session.myJokes);
  }

  else{
        var fin = true;
        req.session.myJokes = ["time up"];
        console.log(req.session.myJokes);


  }
  res.render('jokes', { title: 'Jokes List',lists: req.session.myJokes });

  });

router.post('/jokes',function(req,res,next){
  //req.session.myJokes;
 if(req.session.hasOwnProperty('myJokes')){
  var myJoke = req.body.joke;
  req.session.myJokes.push(myJoke);
  res.render('jokes', {lists: req.session.myJokes});
  if(fin == true){
    res.render('jokes', { title: 'Jokes List'});

  }
 }
});



module.exports = router;
