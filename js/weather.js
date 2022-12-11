function onGeoOk(position) {
	const lat = position.coords.latitude;
	const lon = position.coords.longitude;
	console.log(lat, lon);
}
function onGeoError() {
	alert("Geolocation malfunction");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
