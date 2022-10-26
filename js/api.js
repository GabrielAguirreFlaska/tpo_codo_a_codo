
function iniciarMap(){
	var coord = {lat:-31.4063884, lng:-64.1971122 };
	var map = new google.maps.Map(document.getElementById("map"),{
		zoom: 10,
		center: coord

	});
	var market = new google.maps.Marker({
		position: coord,
		map: map
	});
}