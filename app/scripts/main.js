$(document).ready(function() {
  $(document).on('click', '[data-toggle="panel"]', function(event) {
    event.preventDefault();
    $('body').toggleClass('show-panel');
  });

  $(document).on('click', '.panel__background', function(){
    $('body').removeClass('show-panel');
  });

  // make this more specific
  $(document).on('click', 'button', function(event) {
    event.stopPropagation();
  });
});
