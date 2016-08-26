// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');
var Carousel = require('../_modules/carousel/carousel');
var Gallery = require('../_modules/gallery/gallery');
var Search = require('../search/search');
var Map = require('../_modules/map/map');

$(function() {
  require('bootstrap');
  new Header(); // Activate Link modules logic
  new Carousel();
  new Search();
  new Gallery();
  new Map();
  console.log('Welcome to Yeogurt!');
});
