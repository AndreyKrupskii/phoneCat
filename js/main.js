$(document).ready(function(){
  "use strict";
  jQuery(window).bind('scroll', function (){
    if (jQuery(window).scrollTop() > $('header').height()){
      jQuery('#main-nav').addClass('navbar-fixed-top');
    } else {
      jQuery('#main-nav').removeClass('navbar-fixed-top');
    }
  }); 
  $('#top').parallax("50%", 0.4);
  jQuery(function( $ ){
    $('#download-app1').localScroll({
      duration:1200
    });
    $('#download-app2').localScroll({
      duration:1000
    });
  });
  
});



    

