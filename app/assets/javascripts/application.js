// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//

//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require loading_screen
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.2/modernizr.js"></script>

<<<<<<< HEAD

$(document).ready(function() {
  $(".se-pre-con").hide();
  // $('.tabs').tabs();

  $(document).ajaxStart(function(){
    $(".se-pre-con").show();
  });

  $(document).ajaxStop(function(){

    $(".se-pre-con").delay(3000).hide(0);
  });
});


$(document).on('turbolinks:load', function(){
  $('.carousel').carousel();
});
=======
$(document).on('turbolinks:load', function(){
>>>>>>> 604f23424b870df58891b32dbd9401ec5b9e8e80

    $('.carousel').carousel();
    $('.tabs').tabs();
//     $( ".tabs" ).click(function() {
//       $(".M").show(".Women");
//       $(".M").hide(".Men");
//
// });
});
