$(function() {

	$('.mobile-bar').on('click', function(){
	$('.overlay').css("width", '100%');
	$('.title').hide();
	$('.background').hide();
})

	$('.close-button').on('click', function(){
		$('.overlay').css("width", '0');
		$('.title').show();
		$('.background').show();
	})


});
