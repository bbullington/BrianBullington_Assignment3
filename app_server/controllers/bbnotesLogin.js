

/*GET 'home' page */
module.exports.login =function(req,res){
  res.render('index.jade', {title: 'Login'}
  );
};


/*GET 'location info' page */
module.exports.noteEdit =function(req,res){
    res.render('newnote.jadenewnote', {title:'Location Info'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

/*GET 'addReview' page */
module.exports.addReview =function(req,res){
    res.render('location-review-form.jade', {title:'Add Review'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

