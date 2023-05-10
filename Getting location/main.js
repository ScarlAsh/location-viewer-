let lat;
let long;

navigator.geolocation.getCurrentPosition(showlocation);

function showlocation(pos)
	{
		lat = pos.coords.latitude;
	    long = pos.coords.longitude;
	}


function view(){
	navigator.geolocation.getCurrentPosition(showlocation);
	function showlocation(pos){
	
		alert("the latitude of your location is \n" + pos.coords.latitude + "\n"+ "the longitude of your location is \n" +pos.coords.longitude);
	
	}

}


function viewOnMap(){
	
	window.open("http://maps.google.com/maps?q=" + lat + ",+" + long ,'_blank');
}




