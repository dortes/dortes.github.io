$(function() {



$('#head').on("mousemove", function(event) {
	x = event.pageX;
	y = event.pageY;
	
	if(x > 1000){
		$('.head-image').removeClass('trans-left trans-top trans-bottom').addClass('trans-right');

		
	}
	else if (x < 500){
		$('.head-image').removeClass('trans-right trans-top trans-bottom').addClass('trans-left');

	}
	 
	else if (y < 400 && x < 1000) {
		$('.head-image').removeClass('trans-right trans-bottom trans-left').addClass('trans-top');

	}

	else if (y > 400 && x < 1000) {
		$('.head-image').removeClass('trans-right trans-left trans-top').addClass('trans-bottom');

	}	
})

$('#head').on("mouseleave", function(event) { 
$('.head-image').removeClass('trans-right trans-top trans-bottom trans-left');
})


$('.menu').on('click', function(){
	$('.overlay').css("width", '100%');
})

$('.close-button').on('click', function(){
	$('.overlay').css("width", '0');
})

function suck($ref){
	console.log($ref.parent().parent());
	$ref.parent().parent().removeClass('active').addClass('inactive');

	if($ref.parent().parent().next().length){
		$ref.parent().parent().next().removeClass('inactive').addClass('active');
	}
	else {
		$ref.parent().parent().siblings().first().removeClass('inactive').addClass('active');
	}
}

$('.arrow-right').on('click', function(event){
	var $ref = $(this)
	$(this).parent().parent().addClass("inactive");

setTimeout(function(){
	suck($ref)
}, 500);

})

$('.arrow-next').on('click', function(event){
	var $ref = $(this)
	$(this).parent().parent().addClass("inactive");

setTimeout(function(){
	suck($ref)
}, 100);
})


jQuery(document).ready(function() {
  $('.portfolio').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeIn',
   offset: 100
  });
  $('header').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeInUp',
   offset: 100
  });
  $('.reviews').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeIn',
   offset: 100
  });

  $('.services').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeIn',
   offset: 100
  });

  $('.contact').addClass('hidden').viewportChecker({
   classToAdd: 'visible animated fadeIn',
   offset: 100
  });

$('.logosvg').on('click', function(event) {
	
	if($('.logosvg').hasClass('brain-right-animation')){
		$('.brain-right').removeClass('brain-right-animation');
		$('.logo-h').css('opacity', '0');
		$('.logosvg').css('fill', '#fff')
	}
	else {
		$('.brain-right').addClass('brain-right-animation');
		$('.logo-h').css('opacity', '1');
		$('.logosvg').css('fill', '#ffa8be')
	}
})


});



});
