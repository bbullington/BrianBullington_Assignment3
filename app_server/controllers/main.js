/*GET home page */
module.exports.index=function(req,res){
  res.render('index.jade', {title:'Express'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};



