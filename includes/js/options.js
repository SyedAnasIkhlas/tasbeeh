
function options() 
{
    $(".useful-options").toggleClass("display");
    $(".arrow").toggleClass("arrow-up");

}


$(document).ready(function()
{

	if (localStorage.getItem("checked") == null) 
	{
		//noting is checked
	}
	else
	{
		
		$( 'input[type="checkbox"]' ).prop( "checked", true );
		$("body").addClass('drake-mode');
        $(".tasbeeh").addClass('drake-mode');
        $(".target").addClass('drake-mode');
        $("textarea").addClass('drake-mode');
		$(".nav").addClass('drake-mode');
        $("footer").addClass('drake-mode');
        $(".target-msg").addClass('drake-mode');
        $(".contact").addClass('drake-mode');
        $("#options").addClass('drake-mode');
        $(".menu").addClass('drake-mode');
        $(".classic-tasbeeh-view").addClass('drake-mode');


	}

        $('input[type="checkbox"]').click(function()
        {
            if($(this).prop("checked") == true)
            {
                localStorage.setItem("checked","1")
                $("body").addClass('drake-mode');
                $(".tasbeeh").addClass('drake-mode');
                $(".target").addClass('drake-mode');
                $("textarea").addClass('drake-mode');
				$(".nav").addClass('drake-mode');
                $("footer").addClass('drake-mode');
                $(".target-msg").addClass('drake-mode');
                $(".contact").addClass('drake-mode');
                $("#options").addClass('drake-mode');
                $(".menu").addClass('drake-mode');
                $(".classic-tasbeeh-view").addClass('drake-mode');

            }
            else if($(this).prop("checked") == false)
            {
                localStorage.removeItem("checked")
                $("body").removeClass('drake-mode');
                $(".tasbeeh").removeClass('drake-mode');
                $(".target").removeClass('drake-mode');
                $("textarea").removeClass('drake-mode');
				$(".nav").removeClass('drake-mode');
                $("footer").removeClass('drake-mode');
                $(".target-msg").removeClass('drake-mode');
                $(".contact").removeClass('drake-mode');
                $("#options").removeClass('drake-mode');
                $(".menu").removeClass('drake-mode');
                $(".classic-tasbeeh-view").removeClass('drake-mode');
            }
        });
    });

	
