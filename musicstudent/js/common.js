$(function() {

	$('.header-menu li').on('mouseenter', function() {
		$(this).children('.hidden-menu').css('opacity', '1');
		$(this).children('.hidden-menu').css('pointer-events', 'auto');
		
	})

		$('.header-menu li').on('mouseleave', function() {
		$(this).children('.hidden-menu').css('opacity', '0');
		$(this).children('.hidden-menu').css('pointer-events', 'none');
	})

		$('.mobile-bar').on('click', function(){
			$('.overlay').css("width", '100%');
		})

		$('.close-button').on('click', function(){
			$('.overlay').css("width", '0');
		})

	$('.header-menu-mob li p').on('click', function(e) {
		e.preventDefault();
		$(this).siblings('.hidden-menu-mob').toggleClass('visible-menu');
	})

	$('.fa-user').on('click', function(){
		$('.login-form').toggle();
	})

	$('.fa-search').on('click', function() {
		console.log('s')
		$('.form-search').toggleClass('addOpacity');
	})
});
