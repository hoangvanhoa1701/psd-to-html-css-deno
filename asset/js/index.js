
'use strict';

// variables
var $isAnimatedSecond = $('.section--2 .is-animated');
var $isAnimatedSecondSingle = $('.section--2 .is-animated__single');
// var $isAnimatedThird = $('.third .is-animated');
// var $isAnimatedThirdSingle = $('.third .is-animated__single');
// var $isAnimatedFourth = $('.fourth .is-animated');
// var $isAnimatedFourthSingle = $('.fourth .is-animated__single');

// initialize fullPage
$(document).ready(function () {
  $('#pagepiling').pagepiling({
    navigation: false,
    scrollHorizontally: true,

    onLeave: function (index, nextIndex, direction) {

      /**
      * use the following condition: 
      *
      *   if( index == 1 && direction == 'down' ) {
      *
      * if you haven't enabled the dot navigation
      * or you aren't interested in the animations that occur 
      * when you jump (using the dot navigation) 
      * from the first section to another sections 
      */

      // first animation
      if (index == 1 && nextIndex == 2) {
        $isAnimatedSecond.addClass('animated fadeInUpBig');
        $isAnimatedSecond.eq(0).css('animation-delay', '.5s');
        $isAnimatedSecond.eq(1).css('animation-delay', '.5s');
        $isAnimatedSecond.eq(2).css('animation-delay', '1s');
        $isAnimatedSecondSingle.addClass('animated rollIn').css('animation-delay', '1.7s');
      }

      /**
        * use the following condition: 
        *
        *   else if( index == 2 && direction == 'down' ) {
        *
        * if you haven't enabled the dot navigation
        * or you aren't interested in the animations that occur 
        * when you jump (using the dot navigation) from the first section to the third one 
        */

      // second animation
      // else if ((index == 1 || index == 2) && nextIndex == 3) {
      //   $isAnimatedThird.eq(0).addClass('animated fadeInRightBig').css('animation-delay', '.3s');
      //   $isAnimatedThird.eq(1).addClass('animated fadeInLeftBig').css('animation-delay', '.6s');
      //   $isAnimatedThirdSingle.addClass('animated bounceInDown').css('animation-delay', '1.2s');
      // }


      /**
       * use the following condition:
       *
       *   else if( index == 3 && direction == 'down' ) {
       *
       * if you haven't enabled the dot navigation
       * or you aren't interested in the animations that occur 
       * when you jump (using the dot navigation) 
       * from the first or second section to the fourth one 
       */

      // third animation
      // else if ((index == 1 || index == 2 || index == 3) && nextIndex == 4) {
      //   $isAnimatedFourth.addClass('animated zoomIn').css('animation-delay', '.6s');
      //   $isAnimatedFourthSingle.addClass('animated lightSpeedIn').css('animation-delay', '1.2s');
      //   $isAnimatedFourthSingle.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
      //     $(this).removeClass('lightSpeedIn').addClass('zoomOutDown');
      //   });
      // }
    }
  });

});

