<script>
/*
$(document).ready(function(){
    $( "div.box" ).on( "swipe", function(){
      $(this).hide();
    });
  });
*/
   $(function(){
  // Bind the swipeHandler callback function to the swipe event on div.box
  $( "div.box" ).on( "swipe", colorChanger );
 
  // Callback function references the event target and adds the 'swipe' class to it
  function colorChanger( event ){
    $( event.target ).toggleClass( "change-color" );
  }
});

</script>
 