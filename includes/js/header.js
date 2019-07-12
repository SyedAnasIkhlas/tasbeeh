$(".burger").on('click', function () 
{
	$(".menu").toggleClass('display');

});

$(window).scroll(function() 
{
	if ($(this).scrollTop()>40) 
	{
		$(".menu").removeClass('display');
	

		
	}

});