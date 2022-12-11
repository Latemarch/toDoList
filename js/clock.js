const clock = document.querySelector("#clock");

function getClock() {
	const date = new Date();
	clock.innerText = `${date.getHours()}:${date.getMinutes()}:${String(
		date.getSeconds()
	).padStart(2, "0")}`;
}

setInterval(getClock, 1000);
