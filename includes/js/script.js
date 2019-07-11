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
		$("#numbers").val(reset);

		if ($(".target .value").val() == 0) 
		{
			$(".target input").val(0);
		}
		else
		{
			var value = $(".target .value").val();
			var newValue = parseInt(value)+num;
			$("#numbers").val(reset);
			$(".target input").val(newValue);
			$(".target").flip('toggle');

		}

		$("#numbers").val(reset);
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

	$("#numbers").val(addOne);

	var target = $(".target .value").val();
	var targetNum = parseInt(target);

	if (targetNum == 0) 
	{
		targetNum = 0;
	}
	else
	{
		targetNum = targetNum-1;
		$(".target").flip('toggle');
		$(".target input").val(targetNum)
		$("#numbers").val(addOne);

		if (targetNum == 0) 
		{
			alert("Target is completed");
			navigator.vibrate(1000);
		}

	}
	
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



	var target = $(".target .value").val();
	var targetNum = parseInt(target);

	if (targetNum == 0) 
	{
		targetNum = 0;
		$("#numbers").val(deduct);
	}
	else
	{
		if (num != 0) 
		{
			$(".target").flip('toggle');
			targetNum = targetNum+1;
			$(".target input").val(targetNum)
			$("#numbers").val(deduct);
		}
		else
		{
			$(".target input").val(targetNum)
			$("#numbers").val(deduct);
		}

		
	}

	
	
}


function loadFile(event) {
    var output = document.getElementById('output');
    output.src = URL.createObjectURL(event.target.files[0]);
  };


function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}