function currentAdsStatus()
{
	ad = localStorageGetItem("ads");
	if (ad) 
	{
		checkSwitch('.switch.ad-blocker')
		hideAds()
	}
	else
	{
		alert("You can disable ads from options.")
		uncheckSwitch('.switch.ad-blocker')
		setTimeout(function() { dislayAds(); }, 15000);
	}
}


function dislayAds() 
{
  const script1 =  "<script>(function(d){let s=d.createElement('script');s.async=true;s.src='https://nativesubscribe.pro/code/native.js?h=waWQiOjEwMTUwMjQsInNpZCI6MTAyMDEzMCwid2lkIjozMTY2Niwic3JjIjoyfQ==eyJ';d.head.appendChild(s);})(document);</script>"
  const script2 = "<script>(function(d){let s=d.createElement('script');s.async=true;s.src='https://olineman.pro/code/pops.js?h=waWQiOjEwMTUwMjQsInNpZCI6MTAyMDEzMCwid2lkIjozMTY2OCwic3JjIjoyfQ==eyJ';d.head.appendChild(s);})(document);</script>"
  $(".ads").html(script1+script2).delay( 500000 );
}


function hideAds() 
{
    $(".ads").html("");
}

