var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations.js');
var ctrlOthers= require('../controllers/others.js');

//var ctrlMain=require('../controllers/main.js'); //.js added for clarity. pg 69 commented


/*Locations pages*/      //routes to controllers/locations.js when URL comes in
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/*Other pages */     //routes to controllers/others.js when URL comes in
router.get('/about', ctrlOthers.about);

module.exports = router;




/*old code*/



/* GET home page. */
//router.get('/', ctrlMain.index); commented out pg 84






 // router.get('/', function(req, res, next) {
 //   res.render('index', { title: 'Express' });
 // });


//router.get('/', homepageController);



/* GET home page. */

// var homepageController = function(req, res){
//   res.render('index.jade', {title:'Express'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
// };
//

