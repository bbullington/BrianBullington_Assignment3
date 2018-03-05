var express = require('express');
var router = express.Router();



/* GET home page. */

 // router.get('/', function(req, res, next) {
 //   res.render('index', { title: 'Express' });
 // });





 
var homepageController = function(req, res){
  res.render('index', {title:'Express'});
};

/*Get home page . */

router.get('/', homepageController);


module.exports = router;
