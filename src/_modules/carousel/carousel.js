'use strict';

// Constructor
var Carousel = function() {
  this.name = 'carousel';
  console.log('%s module', this.name);

  $('#myCarousel').carousel({
    interval: 200000
  });
};

module.exports = Carousel;
