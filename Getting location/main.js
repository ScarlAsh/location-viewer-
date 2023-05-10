let lat;
let long;
function myfun(){
	navigator.geolocation.getCurrentPosition(showlocation);

}
function showlocation(pos){
	lat=pos.coords.latitude;
	long=pos.coords.longitude;
	alert("the latitude of your location is \n" + pos.coords.latitude + "\n"+ "the longitude of your location is \n" +pos.coords.longitude);

}

function myfunction(){
	window.open("http://maps.google.com/maps?q=" + lat + ",+" + long ,'_blank');
}

