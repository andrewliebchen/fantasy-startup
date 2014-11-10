$(document).ready(function() {
  $(document).on('click', '[data-toggle="panel"]', function(event) {
    event.preventDefault();
    $('body').toggleClass('show-panel');

    $('.main').on('click', '.main', function(event){
      $('body').removeClass('show-panel');
    });
  });

  // make this more specific
  $(document).on('click', 'button', function(event) {
    event.stopPropagation();
  });
});
