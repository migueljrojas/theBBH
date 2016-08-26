'use strict';

// Constructor
var Gallery = function() {
  this.name = 'gallery';
  console.log('%s module', this.name);

  $('[data-target="#lightbox"]').click(function(){
    var source = $(this).find('._image').attr('src');

    $('._lightboxImg').attr('src', source)
  });
};

module.exports = Gallery;
