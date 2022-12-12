const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form Button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#welcomeMsg");

let savedName = localStorage.getItem("username");

function paintGreeting(name) {
	loginInput.classList.add("hidden");
	loginBtn.classList.add("hidden");
	greeting.classList.remove("hidden");
	greeting.innerText = `Hello ${name}`;
}
function onLoginSubmit(event) {
	event.preventDefault();
	const inputName = loginInput.value;
	paintGreeting(inputName);
	localStorage.setItem("username", inputName);
}

if (savedName) {
	paintGreeting(savedName);
} else {
	loginForm.addEventListener("submit", onLoginSubmit);
}
