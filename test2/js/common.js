$(function() {

	$('.right-arrow').on('click', function(){
		$current = $(this).siblings('figure.active');

		$next = $current.next('figure');
		
		if($next.length != 0) {
			$current.removeClass('active');
			$next.addClass('active');
		}
		else {
			$current.removeClass('active');
			$('.slider figure').first().addClass('active');
		}
	})

		$('.left-arrow').on('click', function(){
		$current = $(this).siblings('figure.active');

		$prev = $current.prev('figure');
		if($prev.length != 0) {
			$current.removeClass('active');
			$prev.addClass('active');
		}
		else {
			$current.removeClass('active');
			$('.slider figure').last().addClass('active');
		}
	})



		$('.right-arrow-av').on('click', function(){
		$current = $('.team-avatars.active-av');

		$next = $current.next('.team-avatars');
	
		if($next.length != 0) {
			$current.removeClass('active-av');
			$next.addClass('active-av');
		}
		else {
			$current.removeClass('active-av');
			$('.team-avatars').first().addClass('active-av');
		}
	})

		$('.left-arrow-av').on('click', function(){
		$current = $('.team-avatars.active-av');

		$prev = $current.prev('.team-avatars');
	
		if($prev.length != 0) {
			$current.removeClass('active-av');
			$prev.addClass('active-av');
		}
		else {
			$current.removeClass('active-av');
			$('.team-avatars').last().addClass('active-av');
		}
	})

		$('.burger').on('click', function(){
			$('nav.menu').toggle('slow', function(){})
		})
});
