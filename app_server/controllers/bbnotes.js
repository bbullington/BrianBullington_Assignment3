

/*GET 'home' page */
module.exports.notesList =function(req,res){
  res.render('locations-list.jade', {
      title: 'Notes List',
      sidebar: "We think everybody has something to say (or at least we think everyone thinks they have something to say",
      pageHeader: {
          title: 'Your Note Library',
          strapline: 'Fill the page!'
      },
      storednotes: [{
          title: 'That one time I drove fast',
          text: 'I felt the need, the need for speed. Unfortunately the cop felt the need, the need to ticket write. the rest, as they say, is history.',
          rating: 3,    //left in for now in case they decide to come back
          tags: ['Driving', 'Bad Choices Make Good Stories', 'Oops'],
          views: '54'
      },{
          title: 'Lifting myself by my Bootstraps',
          text: 'Today I added bootstrap to my site. Wow. That is all I have to say. I think of all those poor teenagers making GeoCities sites and I wonder what they would think if they could see me now.',
          rating: 4,
          tags: ['learn for life', 'adult homework'],
          views: '2'
      },{
          title: 'Soccer Life',
          text: 'There are some who say soccer is life. There are some who just say that sentence is redundant, i n the same way that saying Nick Cage is Nick Cage is redundant',
          rating: 2,
          tags: ['Soccer','Sporting Life'],
          views: '1.5k'
      }]
  });
};


/*GET 'location info' page */
module.exports.noteEdit =function(req,res){
    res.render('location-info.jade', {title:'Note Editor'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
};

/*GET 'addReview' page */
// module.exports.addReview =function(req,res){
//     res.render('location-review-form.jade', {title:'Add Review'});  //.jade added for clarity. This sends for index.jade, giving it a variable for title
// };

