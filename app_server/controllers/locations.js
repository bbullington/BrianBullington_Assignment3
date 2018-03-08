

/*GET 'home' page */
module.exports.homelist =function(req,res){
  res.render('locations-list.jade', {
      title: 'Loc8r - find a place to work with wifi',
      sidebar: "So you are looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
      pageHeader: {
          title: 'Loc8r',
          strapline: 'Find places to work with wifi near you!!!!!!'
      },
      locations: [{
          name: 'Jeremy Coffee',
          address: '125 High Street, Reading, RG6, 1PS',
          rating: 3,
          facilities: ['Hot drinks', 'Food', 'Premium wifi'],
          distance: '100m'
      },{
          name: 'Devon Coffee',
          address: '125 Low Street, Science, RG6, 1PS',
          rating: 4,
          facilities: ['Hot drinks', 'Premium wifi'],
          distance: '200m'
      },{
          name: 'Carla Cofee',
          address: '36 Low Street, Tutor, RG6, 1PS',
          rating: 2,
          facilities: ['Food','Premium wifi'],
          distance: '200m'
      }]
  });
};


/*GET 'location info' page */
module.exports.locationInfo =function(req,res){
    res.render('location-info.jade', {title:'Location Info'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

/*GET 'addReview' page */
module.exports.addReview =function(req,res){
    res.render('location-review-form.jade', {title:'Add Review'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};



locations: [{
    name: 'Starcups',
    address: '125 High Street, Reading, RG6, 1PS',
    rating: 3,
    facilities: ['Hot drinks', 'Food', 'Premium wifi'],
    distance: '100m'
},{
    name: 'Devon Coffee',
    address: '125 Low Street, Science, RG6, 1PS',
    rating: 4,
    facilities: ['Hot drinks', 'Premium wifi'],
    distance: '200m'
},{
    name: 'Carla Cofee',
    address: '36 Low Street, Tutor, RG6, 1PS',
    rating: 2,
    facilities: ['Food','Premium wifi'],
    distance: '200m'
}]