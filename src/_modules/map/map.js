'use strict';

// Constructor
var Map = function() {
  this.name = 'map';
  console.log('%s module', this.name);
  $('._mapToggle').click(function() {
    $(this).toggleClass('-up');
    $('._map').toggleClass('-hidden');
  });
};

module.exports = Map;
