'use strict';

// Constructor
var Promos = function() {

  $('.-moreInfo').on('click',function(){
    $('._promos-more-info').toggleClass('-visible');
  });

  function tabs(){

    $('._tabSelector li').each(function () {
      $(this).on("click", function(){

        var match = $(this).attr('data-tab');

        $('._tabSelector li').removeClass('-active');
        $(this).addClass('-active');

        $('.tab').removeClass('-active');
        $('.tab[data-target="'+ match +'"]').addClass('-active');

      });
    });


  }

  return tabs();

};

module.exports = Promos;
