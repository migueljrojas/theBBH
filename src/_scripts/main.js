// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');
var Carousel = require('../_modules/carousel/carousel');
var CarouselSlick = require('../_modules/carouselslick/carouselSlick');
var Gallery = require('../_modules/gallery/gallery');
var Search = require('../search/search');
var Map = require('../_modules/map/map');
var Promos = require('../_modules/promos/promos');
var Modal = require('../_modules/modal/modal');

$(function() {
  require('bootstrap');
  require('../../bower_components/slick-carousel/slick/slick');
  new Header(); // Activate Link modules logic
  new Carousel();
  new CarouselSlick();
  new Search();
  new Gallery();
  new Map();
  new Promos();
  new Modal();
  console.log('Welcome to Yeogurt!');
});
