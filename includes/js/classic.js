$(".draggable").draggable({ axis: 'y', cursor:'pointer', revert:true,
 stop: function()
{
	$(".circle").toggleClass('color-1 color-2');
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

	return $("#numbers").val(addOne);
}});

// ball goes down another fall from top
// tree ball with class of in out middle
// add animation and toggle classes