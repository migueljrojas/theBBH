'use strict';

// Constructor
var Search = function() {
  this.name = 'search';
  console.log('%s module', this.name);

  $('._mapToggle').click(function() {
    $(this).toggleClass('-up');
    $('._map').toggleClass('-hidden');
  });

};

module.exports = Search;