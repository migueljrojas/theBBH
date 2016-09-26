'use strict';

// Constructor
var Carouselslick = function() {
  this.name = 'carouselSlick';
  console.log('%s module', this.name);

  var carousel = $(".carouselSlickSlides");

  if( $('._carouselSlick').hasClass('gallery') ){
    carousel.slick({
      centerMode: true,
      adaptiveHeight: false,
      variableWidth: true,
      // the magic
      responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }

      }, {

        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          dots: true
        }

      }, {

        breakpoint: 300,
        settings: "unslick" // destroys slick

      }]
    });
  } else {
    carousel.slick({
      // normal options...
      infinite: true,
      centerMode: false,
      adaptiveHeight: true,
      variableWidth: false,
      autoplay: true,
      autoplaySpeed: 5000
    });
  }


};

module.exports = Carouselslick;
