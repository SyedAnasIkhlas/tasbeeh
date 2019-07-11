$(".burger").on('click', function () 
{
	$(".menu").toggleClass('display');

});

$(window).scroll(function() 
{
	if ($(this).scrollTop()>50) 
	{
		// $(".nav").css({display: 'none'});
	

		
	}
	else
	{
		// $(".nav").css({display: 'flex'});

		// $(".burger.burger-scroll").css({display: 'none'});
	}

});