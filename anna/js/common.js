$(function() {

	$('.mobile-bar').on('click', function(){
	$('.overlay').css("width", '100%');
})

	$('.close-button').on('click', function(){
		$('.overlay').css("width", '0');
	})


});
