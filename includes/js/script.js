function reset(s)
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var reset = num * 0;
	$(".reset_button").effect( "shake" );
	navigator.vibrate(s);
	return $("#numbers").val(reset);

}

function addOne(s)
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var addOne = num + 1;
	navigator.vibrate(s);
	$(".add_button").effect( "shake" );
	return $("#numbers").val(addOne);
	
}

function deduct(s)
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
	$(".deduct_button").effect( "shake" );
	navigator.vibrate(s);
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
