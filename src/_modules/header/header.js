'use strict';
var $ = require('jquery');

// Constructor
var Header = function() {
  this.name = 'header';
  console.log('%s module', this.name);

  $('.hamburguer').click(function(){
    $(this).toggleClass('-open');
  });

};

module.exports = Header;
