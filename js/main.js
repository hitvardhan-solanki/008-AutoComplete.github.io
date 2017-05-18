(
//plugin to autocomplete world's cities
function( $ ) {
  var NoRecords = ['No Records Found'];
  $.fn.autoCompleteCity = function(){
    //Check the tag name
    console.log("Tag name  ----> "+$(this).get(0).tagName);
    $( this ).autocomplete({
      source : function (req , res){
        //Implement the AJAX
        $.ajax({
          url: "http://gd.geobytes.com/AutoCompleteCity",
          dataType: "jsonp",
          data: {
            q: req.term
          },
          success: function(data) {
          //Check for the length of the data returned
          if(data[0] != "")
            {
              res(data);
            }
          else{
              res(NoRecords);
          }
          }
        });
      },
      minLength: 3,
      select: function(event , ui){
        log( ui.item ? "selected: " + ui.item.label :   "Nothing selected, input was " + this.value);
      },
      open: function() {
       $( this ).removeClass("ui-corner-all").addClass("ui-corner-top");
      },
      close: function() {
        $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
      }
    });
  }
}
( jQuery )
);

/**
 * Function to log the message
 * @method log
 * @param  {[String]} message [description]
 */
function log( message ) {
      $( "<div>" ).text( message ).prependTo( "#log" );
      $( "#log" ).scrollTop( 0 );
};
