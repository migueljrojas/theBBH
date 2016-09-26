'use strict';

// Constructor
var Carousel = function() {
  this.name = 'carousel';
  console.log('%s module', this.name);

  $('.carousel-indicators li:first-child').addClass('active');
  $('.carousel-inner .item:first-child').addClass('active');

  if( $('._carousel').hasClass('multiple')){

  }

};

module.exports = Carousel;
