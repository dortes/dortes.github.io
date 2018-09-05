$(function() {


$(window).on("load", function(){
  $('.loading').css("display", "none");
  $('#wrap').css("opacity", '1')
})
	$('.open-line').on('click', function(){
		$('.soc-icons').toggleClass('active-soc')
	})


	var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

  $('.circle').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });


  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 50; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 50;

});

moveBackground();


var $1 = document.querySelector.bind(document);
     var $on = document.addEventListener.bind(document);

     var xmouse, ymouse;
     $on('mousemove', function (e) {
          xmouse = e.clientX || e.pageX;
          ymouse = e.clientY || e.pageY;
     });

     var ball = $1('#ball');
     var x1 = void 0,
          y1 = void 0,
          dx = void 0,
          dy = void 0,
          tx = 0,
          ty = 0,
          key = -1;

     var followMouse = function followMouse() {
          key = requestAnimationFrame(followMouse);

          if(!x1 || !y1) {
               x1 = xmouse;
               y1 = ymouse;
          } else {
               dx = (xmouse - x1) * 0.125;
               dy = (ymouse - y1) * 0.125;
               if(Math.abs(dx) + Math.abs(dy) < 0.1) {
                    x1 = xmouse;
                    y1 = ymouse;
               } else {
                    x1 += dx;
                    y1 += dy;
               }
          }
          ball.style.left = x1 + 'px';
          ball.style.top = y1 + 'px';
     };

followMouse();

 $('#portfolio').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInUp',
   offset: 100
  });

  $('footer').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeIn',
   offset: 100
  });
});
