
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
        $(".start").html(localStorage.getItem("start-date"))
    }

    if (localStorage.getItem("end-date") == "") 
    {
        //if its empty
        
    }
    else
    {
        $(".end").html(localStorage.getItem("end-date"));
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
    if (localStorage.getItem("daysRemaining") == NaN) 
    {
        $(".last-day-message").html("");
    }
    else
    {
            const date1 = new Date(localStorage.getItem("start-date"));
            const date2= new Date(localStorage.getItem("end-date"));
            const timeDifference = date2.getTime() - date1.getTime();
            
            
            //Get days differece
            const milliSecondInOneSecond = 1000;
            const secondInOneHour = 3600;
            const hoursInOneDay = 24;

            const days = timeDifference / (milliSecondInOneSecond*secondInOneHour*hoursInOneDay);

            if (days == 1) 
            {
                daysMessage = " day remaining";
            }
            else
            {
                daysMessage = " days remaining";
            }
            const daysRemaining = 
            $(".last-day-message").html(days+daysMessage);



        if (localStorage.getItem("daysRemaining") == null) 
        {
        	 $(".last-day-message").html("");
        }
        
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
                const date1 = new Date($( ".start-date" ).val());
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
				else if ($( ".end-date" ).val() == "") 
				{
					alert("Ending date is required");
				}
                else if($(".duration").val()== "")
                {
                    alert("Duration is required");
                }
				else
				{
				  // localstorage
                  localStorage.setItem('start-date',$(".start-date").val());
                  localStorage.setItem('end-date',$( ".end-date" ).val());
                  localStorage.setItem('duration',$(".duration").val());
                  localStorage.setItem('daysRemaining',daysRemaining );
                  alert('Saved');
                  if (daysRemaining > 1) 
                  {
                  	daysMessage = " days remaining"
                  }
                  else
                  {
                  	daysMessage = " day remaining"
              	  }

                  $(".last-day-message").html(daysRemaining + daysMessage);
				}

                $(".end").html($( ".end-date" ).val());
                $(".start").html($( ".start-date" ).val());
                  
              });

             $(".delete-memory").on('click', function() 
	          {
	          	const confirmEraseMemory= confirm("Press 'Ok' if you want delete saved dates");
	          	if (confirmEraseMemory == true) 
	          	{
	          	  localStorage.removeItem('start-date');
                  localStorage.removeItem('end-date');
                  localStorage.removeItem('duration');
                  localStorage.removeItem('daysRemaining');
                  alert('Deleted');
                  $(".last-day-message").html("");
                  $(".end").html("");
                  $(".start").html("");

	          	}
	          	else
	          	{
	          		//Do Nothing
	          	}	
	          	  

	          });

             $('.duration').keyup(function() 
             {
               
               const duration =  parseInt($('.duration').val())


                if ($('.duration').val() == "") 
                {
                    $('.end-date').val("");
                }
                else if ($('.duration').val() == 0) 
                {
                    $('.end-date').val("");
                }
                else
                {
                     var myDate = $(".start-date").datepicker('getDate'); // Retrieve selected date
                    myDate.setDate(myDate.getDate() + duration); // Add 7 days

                    $('.end-date').val($.datepicker.formatDate('yy-mm-dd', myDate)); // Reformat
                    // alert(myDate)
                }

               
               
             });

           
          });







          

    });

	
