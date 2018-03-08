

/*GET 'home' page */
module.exports.homelist =function(req,res){
  res.render('locations-list.jade', {title:'Home'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

/*GET 'location info' page */
module.exports.locationInfo =function(req,res){
    res.render('location-info.jade', {title:'Location Info'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

/*GET 'addReview' page */
module.exports.addReview =function(req,res){
    res.render('location-review-form.jade', {title:'Add Review'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};
