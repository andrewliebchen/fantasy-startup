$(document).ready(function() {
  // Use tabletop to get the the startup info
  // Source spreadsheet: https://docs.google.com/spreadsheets/d/1orGnmev3T59ybT9WkKtzlmuLERL-QYy_3dQgNlVlIpw/edit#gid=0
  var URL = "1orGnmev3T59ybT9WkKtzlmuLERL-QYy_3dQgNlVlIpw";
  Tabletop.init({
    key: URL,
    callback: showStartups,
    simpleSheet: false
  });

  function showStartups(data, tabletop) {
    // Populate the startup table
    var startupsData = tabletop.sheets('Startups').all();
    var globalData  = tabletop.sheets('global').all();
    var source       = $("#startups_template").html();
    var template     = Handlebars.compile(source);
    $("#startups").html(template({row: startupsData}));

    // Open the panel
    $(document).on('click', '[data-toggle="panel"]', function(event) {
      event.preventDefault();
      var rowID    = $(this).data('startup-id') - 1;
      var source   = $("#startup_detail_template").html();
      var template = Handlebars.compile(source);
      $("#panel__contents").html(template(startupsData[rowID]));

      $('body').addClass('show-panel');
    });
  }

  // Close the panel when click outside panel
  $(document).on('click', '.overlay__background', function(){
    $('body').removeClass('show-panel')
             .removeClass('show-modal');
  });

  // Make this more specific
  $(document).on('click', 'button', function(event) {
    event.stopPropagation();
  });

  // Toggle the modal
  $(document).on('click', '[data-toggle="modal"]', function(event){
    event.preventDefault();
    var $modalContentTarget = $($(this).data('modal'));
    $('.modal__content').hide();
    $modalContentTarget.show();
    $('body').toggleClass('show-modal');
  });
});
