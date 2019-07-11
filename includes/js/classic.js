$(".draggable").draggable({ axis: 'y', cursor:'pointer', revert:true,
 stop: function()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var addOne = num + 1;
	navigator.vibrate(200);

	var $el = $(".add_button"),
    x = 100,
    originalColor = $el.css("background");

	$el.css("background", "#77ff7b");
	setTimeout(function(){
	  $el.css("background", originalColor);
	}, x);
	// $(".target input").val(addOne);
	// $(".target").flip({axis:'x'});
	
	if ($(".target .value").val() == 0) 
	{
		$(".target input").val(0);
	}
	else
	{
		var value = $(".target .value").val();
		var newValue = value-1;
		$(".target input").val(newValue);
		$(".target").flip('toggle');

		if (newValue == 0) 
		{
			navigator.vibrate(1000);
			alert("Target is complete");
		}
	}


	return $("#numbers").val(addOne);
},start:function() 
{
	$(".circle").toggleClass('color-1 color-2');
	
}});




// ball goes down another fall from top
// tree ball with class of in out middle
// add animation and toggle classes