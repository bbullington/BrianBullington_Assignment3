var express = require('express');
var router = express.Router();


var ctrlBbnotes = require('../controllers/bbnotes.js'); //formerly:  var ctrlLocations = require('../controllers/locations.js');
var ctrlBbNotesLogin = require('../controllers/bbnotesLogin.js')
//var ctrlOthers= require('../controllers/others.js');




/*Locations pages*/      //routes to controllers/locations.js when URL comes in
router.get('/notes', ctrlBbnotes.notesList);
router.get('/newnote', ctrlBbnotes.noteEdit);


/*Login Page */     //routes to controllers/others.js when URL comes in

router.get('/', ctrlBbNotesLogin.login);
//router.get('/location/review/new', ctrlLocations.addReview);

/*Other pages */     //routes to controllers/others.js when URL comes in
//router.get('/about', ctrlOthers.about);

module.exports = router;


