var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var resultdata = 'dfskjhl';
  global.db.query("SELECT * FROM test").then(data => {
    console.log(data);
    resultdata= data;

  }).then(function()
      {
          res.render('index', { title: 'Express' , testValue:resultdata});
      }
  ).catch(error =>{
    console.log(error);
  });

  //console.log(resultdata);

});

module.exports = router;
