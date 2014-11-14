$(document).ready(function() {
  // Use tabletop to get the the startup info
  var URL = "1orGnmev3T59ybT9WkKtzlmuLERL-QYy_3dQgNlVlIpw";
  Tabletop.init( { key: URL, callback: showStartups, simpleSheet: true } );

  function showStartups(data) {
    // Populate the startup table
    var source   = $("#startups_template").html();
    var template = Handlebars.compile(source);
    $("#startups").html(template({row: data}));

    // Open the panel
    $(document).on('click', '[data-toggle="panel"]', function(event) {
      event.preventDefault();
      var rowID = $(this).data('startup-id') - 1;
      var source   = $("#startup_detail_template").html();
      var template = Handlebars.compile(source);
      $("#startup_detail").html(template(data[rowID]));

      $('body').toggleClass('show-panel');
    });
  }

  // Close the panel when click outside panel
  $(document).on('click', '.panel__background', function(){
    $('body').removeClass('show-panel');
  });

  // make this more specific
  $(document).on('click', 'button', function(event) {
    event.stopPropagation();
  });
});
