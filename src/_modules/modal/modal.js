'use strict';

// Constructor
var Modal = function() {

  var modalShown = false;

  function modalTemplate(data){
    if ( modalShown === false ){
      $.get(data, function(template){
        $('body').append(template);
        $('#loadModal').modal('show')
      });
      modalShown = true;
    } else {
      $('#loadModal').modal('show')
    }
  }

  $('.load-modal').on('click', function(e){
    e.preventDefault();
    var target = $(this).attr('data-target');
    modalTemplate(target);
  });
};

module.exports = Modal;
