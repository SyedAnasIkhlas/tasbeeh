function reset()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var confirmReset= confirm("Press 'Ok' if you want to reset your progress");

	 if (confirmReset == true) 
	 {
		var reset = num * 0;
		navigator.vibrate(500);

		var $el = $(".reset_button"),
	    x = 100,
	    originalColor = $el.css("background");

		$el.css("background", "#F44336");
		setTimeout(function(){
		  $el.css("background", originalColor);
		}, x);

		return $("#numbers").val(reset);
	}
	else
	{
		return $("#numbers").val(num);
	}

}

function addOne()
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

	return $("#numbers").val(addOne);

	
}

function deduct()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);

	if (num == 0) 
	{
		var deduct = num - 0;
	}
	else
	{
		var deduct = num - 1;
	}
	navigator.vibrate(200);

	var $el = $(".deduct_button"),
    x = 100,
    originalColor = $el.css("background");

	$el.css("background", "#F44336");
	setTimeout(function(){
	  $el.css("background", originalColor);
	}, x);

	return $("#numbers").val(deduct);
	
}


function loadFile(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };
