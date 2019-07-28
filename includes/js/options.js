
function options() 
{
    $(".useful-options").toggleClass("display");
    $(".arrow").toggleClass("arrow-up");

}


$(document).ready(function()
{
   
    const lastDayMessage = "Today is the last day"; 
    const currentDate = $.datepicker.formatDate('yy-mm-dd', new Date());

    //dates
    if (localStorage.getItem("start-date") == "") 
    {
        //if its empty
    }
    else
    {
        $(".start-date").val(localStorage.getItem("start-date"))
    }

    if (localStorage.getItem("end-date") == "") 
    {
        //if its empty
        
    }
    else
    {
        $(".end-date").val(localStorage.getItem("start-date"))
    }


    if (localStorage.getItem("duration") == "") 
    {
        //if its empty
    }
    else
    {
        $(".duration").val(localStorage.getItem("duration"))
    }

    //Matching ending date with current date
    if (localStorage.getItem("end-date") == currentDate) 
    {
        $(".last-day-message").html(lastDayMessage);
    }

     //Days Remaining
    if (localStorage.getItem("daysRemaining") == "") 
    {
        //Nothing
    }
    else
    {
        if (localStorage.getItem("daysRemaining") == 1) 
        {
            daysMessage = " day remaining";
        }
        else
        {
            daysMessage = " days remaining";
        }

        $(".last-day-message").html(localStorage.getItem("daysRemaining")+daysMessage);
        
    }

    //click action

   if (localStorage.getItem("vibrate") == null) 
   {  
    $( '.switch.beep' ).prop( "checked", true );
    $( '.switch.vibrate' ).prop( "checked", false );
   }
   else
   {
    $( '.switch.vibrate' ).prop( "checked", true );
    $( '.switch.beep' ).prop( "checked", false );
   }

	if (localStorage.getItem("dark") == null) 
	{
		//noting is checked
	}
	else
	{
		
		$( '.switch.dark' ).prop( "checked", true );
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

        $('.switch.dark').click(function()
        {
            if($(this).prop("checked") == true)
            {
                localStorage.setItem("dark","1")
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
                localStorage.removeItem("dark")
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



        $('.switch.vibrate').on('change',function()
        {
            if($(this).prop("checked") == true)
            {
                $('.switch.beep').prop( "checked", false );
                localStorage.setItem("vibrate","1");
                localStorage.removeItem("beep");
                
                
            }
            else
            {
                $('.switch.beep').prop( "checked", true );
                $('.switch.vibrate').prop( "checked", false );
                localStorage.removeItem("vibrate");
                localStorage.setItem("beep","1");
                
            }
        });

          $('.switch.beep').on('change',function()
        {
            if($(this).prop("checked") == false)
            {
                $('.switch.beep').prop( "checked", false );
                localStorage.setItem("vibrate","1");
                localStorage.removeItem("beep");
                
                
            }
            else
            {
                $('.switch.beep').prop( "checked", true );
                $('.switch.vibrate').prop( "checked", false );
                localStorage.removeItem("vibrate");
                localStorage.setItem("beep","1");
                
            }
        });


          $( function()
          {
            $( ".start-date" ).datepicker();
            $( ".start-date" ).datepicker("option", "dateFormat", "yy-mm-dd");

            if ( $( ".start-date" ).val() == "") 
            {
                $( ".start-date" ).val(currentDate);
            }
                  

            const startDate = $( ".start-date" ).val(); 
            const endDate  = $( ".end-date" ).val();

            

           
           
            $( ".end-date" ).datepicker();
            $( ".end-date" ).datepicker("option", "dateFormat", "yy-mm-dd");

            //end date on change
            $(".end-date").change(function() 
            {
                const date1 = new Date($( ".start-date" ).val());
                const date2= new Date($( ".end-date" ).val());
                const timeDifference = date2.getTime() - date1.getTime();
                

                //Get days differece
                const milliSecondInOneSecond = 1000;
                const secondInOneHour = 3600;
                const hoursInOneDay = 24;

                const dayDiff = timeDifference / (milliSecondInOneSecond*secondInOneHour*hoursInOneDay);
                if (dayDiff < 1) 
                {
                    $('.duration').val(0);
                } 
                else
                {
                     $('.duration').val(dayDiff);
                }

                
            });

            //start date on change
            $(".start-date").change(function() 
            {
                const date1 = new Date($( ".start-date" ).val());
                const date2= new Date($( ".end-date" ).val());
                const timeDifference = date2.getTime() - date1.getTime();
                

                //Get days differece
                const milliSecondInOneSecond = 1000;
                const secondInOneHour = 3600;
                const hoursInOneDay = 24;

                const dayDiff = timeDifference / (milliSecondInOneSecond*secondInOneHour*hoursInOneDay);
                if (dayDiff < 1) 
                {
                    $('.duration').val(0);
                } 
                else
                {
                     $('.duration').val(dayDiff);
                }

                
            });

             $(".save-memory").on('click', function() 
              {

                //one day remaining
                 const date1 = new Date(currentDate);
                const date2= new Date($( ".end-date" ).val());
                const timeDifference = date2.getTime() - date1.getTime();
                

                //Get days differece
                const milliSecondInOneSecond = 1000;
                const secondInOneHour = 3600;
                const hoursInOneDay = 24;

                const daysRemaining = timeDifference / (milliSecondInOneSecond*secondInOneHour*hoursInOneDay);

                if (daysRemaining < 1 ) 
                {
                    alert("Can't save this duration");
                    daysRemaining = "";
                    
                }
                // 
                // localstorage
                  localStorage.setItem('start-date',$(".start-date").val());
                  localStorage.setItem('end-date',$( ".end-date" ).val());
                  localStorage.setItem('duration',$(".duration").val());
                  localStorage.setItem('daysRemaining',daysRemaining );
                  // if ($(".end-date").val() == currentDate) 
                  // {
                  //   $(".last-day-message").val(lastDayMessage);
                  //     localStorage.removeItem('start-date');
                  //     localStorage.removeItem('start-date');
                  //     localStorage.removeItem('duration');
                  // }
                  alert('Saved');
              });

           
          });





          

    });

	
