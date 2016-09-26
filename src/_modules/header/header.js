'use strict';
var $ = require('jquery');

// Constructor
var Header = function() {
  this.name = 'header';
  console.log('%s module', this.name);

  $('.hamburguer').click(function(){
    $(this).toggleClass('-open');
  });


  $('.-topLevel').each(function(){
    $(this).on('click',function(){
      if( $(this).hasClass('-open') ){
        $(this).toggleClass('-open')
      } else {
        $('.-topLevel').removeClass('-open');
        $(this).addClass('-open');
      }
    });
  });

};

module.exports = Header;
