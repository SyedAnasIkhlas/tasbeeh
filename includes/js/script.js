function reset()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var reset = num * 0;
	return $("#numbers").val(reset);
	$(this).effect( "shake" );
}

function addOne()
{
	var numbers = $("#numbers").val();
	var num = parseInt(numbers);
	var addOne = num + 1;
	return $("#numbers").val(addOne);
	$(this).effect( "shake" );
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
	
	return $("#numbers").val(deduct);
	$(this).effect( "shake" );
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
