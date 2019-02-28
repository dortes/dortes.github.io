$(function() {

	$('.main-menu .mob-button').on('click', function() {
		
		if($('.main-menu .menu').hasClass('active')) {
			$('.main-menu .menu').removeClass('active');
		}
		else {
			$('.main-menu .menu').addClass('active');
		}
	})

	$('.main-menu .close').on('click', function() {
		$('.main-menu .menu').removeClass('active');
	})

});
