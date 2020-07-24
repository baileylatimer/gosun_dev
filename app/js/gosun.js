// #Collection Banner - Change color based on URL
$( document ).ready(function() {

    var loc = window.location.href; // returns the full URL
    var root = "gosun.co";
    var end = loc.slice(loc.lastIndexOf(root)+root.length);
  
    if(end.length <= 0) { // If Empty or if just home URL
      $('#header-content').addClass('grape');
      //Remove All Other Classes
      $('.split-banner--content').removeClass('ocean');
      $('.split-banner--content').removeClass('olive');
      $('.split-banner--content').removeClass('cherry-900');
    }
    if(end === "/collections/solar-coolers") { // if page = root/start-here/
      $('.split-banner--content').addClass('ocean');
      //Remove All Other Classes
      $('.split-banner--content').removeClass('grape');
      $('.split-banner--content').removeClass('olive');
      $('.split-banner--content').removeClass('cherry-900');
    }
    if(end === "/collections/solar-power") { // if page = root/work-with-me/
      $('.split-banner--content').addClass('cherry-900');
      //Remove All Other Classes
      $('.split-banner--content').removeClass('grape');
      $('.split-banner--content').removeClass('ocean');
      $('.split-banner--content').removeClass('olive');
    }
    if(end === "/collections/solar-lighting") { // if page = root/work-with-me/
        $('.split-banner--content').addClass('olive');
        //Remove All Other Classes
        $('.split-banner--content').removeClass('grape');
        $('.split-banner--content').removeClass('ocean');
        $('.split-banner--content').removeClass('cherry-900');
      }
  });




  $(window).resize(function(){
    if ($(window).width() <= 768){	
      $('.width-small-1-1').removeClass('width-1-2');
    }	
  });


  $( document ).ready(function() {
    $('.spr-summary-actions-newreview').addClass('button')
});

  $('#play').on('click', function(e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1;rel=0;modestbranding=1&amp;title=";
    $('#player').show();
    $('#video-cover').hide();
    $('#play').hide();
  });








$(document).ready(function() {
  $('a[href*=#]').bind('click', function(e) {
      e.preventDefault(); // prevent hard jump, the default behavior

      var target = $(this).attr("href"); // Set the target as variable

      // perform animated scrolling by getting top-position of target-element and set it as scroll target
      $('html, body').stop().animate({
          scrollTop: $(target).offset().top
      }, 600, function() {
          location.hash = target; //attach the hash (#jumptarget) to the pageurl
      });

      return false;
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();

  // Show/hide menu on scroll
  if (scrollDistance >= 850) {
      $('.sticky-fade').fadeIn("fast");
  } else {
      $('.sticky-fade').fadeOut("fast");
  }

  // Assign active class to nav links while scolling
  $('.page-section').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.navbar a.active-tab').removeClass('active-tab');
          $('.navbar a').eq(i).addClass('active-tab');
      }
  });
}).scroll();






