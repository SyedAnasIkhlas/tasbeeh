$(".burger").on('click', function () 
{
	$(".menu").toggleClass('display');

});

$(window).scroll(function() 
{
	if ($(this).scrollTop()>20) 
	{
		// $(".nav").css({display: 'none'});
		$(".menu").css({display: 'none'});
		
	}
	else
	{
		// $(".nav").css({display: 'flex'});

		// $(".burger.burger-scroll").css({display: 'none'});
	}

});