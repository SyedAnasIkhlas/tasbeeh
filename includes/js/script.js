function reset()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var reset = num * 0;
	navigator.vibrate(200);

	var $el = $(".reset_button"),
    x = 100,
    originalColor = $el.css("background");

	$el.css("background", "#77ff7b");
	setTimeout(function(){
	  $el.css("background", originalColor);
	}, x);

	return $("#numbers").val(reset);

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

	$el.css("background", "#77ff7b");
	setTimeout(function(){
	  $el.css("background", originalColor);
	}, x);

	return $("#numbers").val(deduct);
	
}

const uploadFileButton = document.getElementById("addImage");
const customText = document.getElementById("imageName");

uploadFileButton.addEventListener("change", function() {
  if (uploadFileButton.value) {
    customText.innerHTML = uploadFileButton.value.match(
      /[\/\\]([\w\d\s\.\-\(\)]+)$/
    )[1];
  } else {
    customText.innerHTML = "No image selected.";
  }
});
