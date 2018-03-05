var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/main.js'); //.js added for clarity. pg 69

/* GET home page. */
router.get('/', ctrlMain.index);
module.exports = router;






 // router.get('/', function(req, res, next) {
 //   res.render('index', { title: 'Express' });
 // });


//router.get('/', homepageController);



/* GET home page. */

// var homepageController = function(req, res){
//   res.render('index.jade', {title:'Express'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
// };
//

