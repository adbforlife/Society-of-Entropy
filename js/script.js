$(document).ready(function()	{
	var $winHeight = $(window).outerHeight();
	$('.jumbo').css('height', $winHeight);
	$('#title').css('margin-top', $winHeight/3);
	$('#title').css('font-size', $winHeight/8);
	$('#initiation').css('width', Math.max(180, $(window).outerWidth()/6));

	$(window).resize(function()	{
		var $height = $(window).outerHeight();
		$('.jumbo').css('height', $height);
		$('#title').css('margin-top', $height/3);
		$('#title').css('font-size', $height/8);
		$('#initiation').css('width', Math.max(180, $(window).outerWidth()/6));
	});

	$('#initiation').hover(
		function()	{
			$(this).animate({backgroundColor: '#249810', color: '#fcfcfc'}, 150);
		},
		function()	{
			$(this).animate({backgroundColor: '#fcfcfc', color: '#249810'}, 150);
		}
	);
});