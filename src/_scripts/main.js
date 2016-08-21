// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
var Header = require('../_modules/header/header');

$(function() {
  new Header(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
