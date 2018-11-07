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

	$('.header-menu-mob li span').on('click', function() {
		event.preventDefault();
		$(this).siblings('.hidden-menu-mob').toggle(
			function(){	$(this).css({'height': '100%'});},
			
			)
	})
});
