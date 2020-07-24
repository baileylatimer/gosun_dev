  $(window).resize(function(){
    if ($(window).width() <= 768){	
      $('.width-small-1-1').removeClass('width-1-2');
    }	
  });

// -----------------------------------------------------------------------------
// Media / Video
// -----------------------------------------------------------------------------
  $('#play').on('click', function(e) {
    e.preventDefault();
    $("#player")[0].src += "?autoplay=1;rel=0;modestbranding=1&amp;title=";
    $('#player').show();
    $('#video-cover').hide();
    $('.btn-wrap').hide();
  });



  
  $(function() {
    $('.purchase-details').html($('.purchase-details').html().replace("undefined", ""));
  });

// -----------------------------------------------------------------------------
// Navigation / Product
// -----------------------------------------------------------------------------

function sticktothetop() {
  var window_top = $(window).scrollTop();
  var top = $('#stick-here').offset().top;
    // Show/hide menu on scroll
  if (window_top > top) {
      $('#stickThis').addClass('stick');
      $('#stick-here').height($('#stickThis').outerHeight());
      $('.sticky-fade').fadeIn("fast");
      $('.purchase-details__buttons').addClass('sticky-buy');
  } else {
      $('#stickThis').removeClass('stick');
      $('#stick-here').height(0);
      $('.sticky-fade').fadeOut("fast");
      $('.purchase-details__buttons').removeClass('sticky-buy');
  }
}
$(function(){
    $(window).scroll(sticktothetop);
    sticktothetop();
    console.log('Sticking to the top');
});

$(document).ready(function(){
  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 0);
     
  });
});

$(window).scroll(function() {
  var scrollDistance = $(window).scrollTop();
  // Assign active class to nav links while scolling
  $('section--page').each(function(i) {
      if ($(this).position().top <= scrollDistance) {
          $('.subnav__menu a.active-tab').removeClass('active-tab');
          $('.subnav__menu a').eq(i).addClass('active-tab');
      }
      console.log('Counting sections');
  });
}).scroll();


// -----------------------------------------------------------------------------
// Navigation / Promo Banner
// -----------------------------------------------------------------------------
// When the user scrolls down 40px from the top of the document, hide the promo banner
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 40) {
    $('.promo_banner').addClass('hide');
  } else {
    $('.promo_banner').removeClass('hide');
  }
} 


// -----------------------------------------------------------------------------
// Section / Reviews
// -----------------------------------------------------------------------------
$(document).ready(function() {
  $('.spr-summary-actions-newreview').addClass('button')
});

$(function() {
  $(".stamped-summary-actions-newreview, .stamped-summary-actions-newquestion").addClass("button, -hollow, -dark");
  if ($('.stamped-review-avatar[data-author="GoSun"]')) {
    $('stamped-review-reply').addClass("reply--offical");
  }
});

/* #Banners / Dialog - [Show/Hide] */
$(".dismiss-trigger").click(function(){
  $(".dismiss-target").addClass("hide");
});


/* #Shogun */
$(function() {
  $(".shg-product").addClass("article-tile--lg");
  $(".shg-product-title-component h3").addClass("article-title base-BodyTitle");
  $(".shogun-form button").addClass("button");
});


 /* #Register / Account */
$(function() {
  if ($(window).width() > 768 ) {
     $('.full-left, .full-right').addClass('width-1-2 h100').removeClass('width-1-1');
     $('.full-container').addClass('f-r-c m0').removeClass('flex-column');
     $('.card--lg').addClass('ml30');
     $('.full-left').addClass('align-end');
     $('.full-right').addClass('align-start');
     $('.grid--1-2').addClass('grid--1-4').removeClass('grid--1-2');
     /* #Shogun / Slides */
     $('.shg-sld-nav-button').removeClass('hide');
     $('.shg-sld-slides').addClass('shg-sld-slides-padded');
  } else {
      $('.full-left, .full-right').addClass('width-1-1').removeClass('width-1-2 h100');
      $('.full-container').addClass('flex-column m0').removeClass('f-r-c');
      $('.card--lg').removeClass('ml30');
      $('.full-left').removeClass('align-end');
      $('.full-right').removeClass('align-start');
      $('.grid--1-4').addClass('grid--1-2').removeClass('grid--1-4');
      $('.shg-sld-nav-button').addClass('hide');
      $('.shg-sld-slides').removeClass('shg-sld-slides-padded');
  }
});


 /* #Media / Video – Autoloop */
window.addEventListener('load', async () => {
  let video = document.querySelector('video[muted][autoplay]');
  try {
    await video.play();
  } catch (err) {
    video.controls = true;
  }
});















