// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');
var Carousel = require('../_modules/carousel/carousel');

$(function() {
  require('bootstrap');
  new Header(); // Activate Link modules logic
  new Carousel();
  console.log('Welcome to Yeogurt!');
});
