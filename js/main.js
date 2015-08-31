$(document).ready(function() {
    setBottomBarHeight();
    setLogoTopPadding();
    

    // Center robots on smaller screens and mobile.
    if ($(window).width() <= 950 || isMobile()) {
      centerRobots();
    }

    $(".success-notification").hide();
    $(".failed-notification").hide();
    $( "form"  ).submit(function( event  ) {
      if(validateEmail($("#mce-EMAIL").val())){
        $(".success-notification").show();
        $(".failed-notification").hide();
      } else {
        $(".success-notification").hide();
        $(".failed-notification").show();
      }
      event.preventDefault();
    });
});

$(window).resize(function() {
	setBottomBarHeight();
  setLogoTopPadding();
  if ($(window).width() <= 950) {
    centerRobots();
  }
});

$(window).load(function() {
		entranceAnimation();
    hoverAnimation();
});

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function setBottomBarHeight() {
  /* Work around for safari where bottom bar height is not set until resize. */
  var height = .3 * $('.computers-image').height();
  $('.bottom-bar').height(height == 0 ? '3em' : height);
}

function setLogoTopPadding() {
  if ($(window).height() > 500) {
    $('.logo').css('padding-top', ($(window).height() > 600) ? $(window).height() * .2 : $(window).height() * .15);
  }
}

function entranceAnimation() {
  if ($(window).width() <= 600 || isMobile()) {
    $('.robots').addClass('animated bounceInDown');
    $('.top').addClass('animated bounceInDown');
  } else {
    $('.bottom-image').addClass('animated bounceInRight');
    $('.robots').addClass('animated bounceInLeft');
    $('.top').addClass('animated bounceInDown');
  }
  $('.bottom-image').css('visibility', 'visible');
  $('.robots').css('visibility', 'visible');
  $('.top').css('visibility', 'visible');
}

function hoverAnimation() {
  var robotClasses = ['.robot-1', '.robot-2', '.robot-3', '.robot-4', '.robot-5'];
  robotClasses.forEach(function(robot) {
    var element = $(robot);
    element.hover(
      function() {
        element.addClass('animated pulse');        
        element.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
          element.removeClass('animated pulse');
        });
    });
  });
}

function centerRobots() {
  $('.robots').scrollTo('50%');
}

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}
