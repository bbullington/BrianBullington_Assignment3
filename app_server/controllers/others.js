

/*GET 'about' page */
module.exports.about=function(req,res){
  res.render('index.jade', {title:'About'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};



