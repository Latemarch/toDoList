const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

let toDos = [];

function deleteToDo(event) {
	const li = event.target.parentElement;
	li.remove();
	toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
	saveToDo();
}
function saveToDo() {
	localStorage.setItem("toDos", JSON.stringify(toDos));
	toDoInput.value = "";
}

function paintToDo(newToDo) {
	const li = document.createElement("li");
	li.id = newToDo.id;
	const span = document.createElement("span");
	const btn = document.createElement("button");

	li.appendChild(btn);
	li.appendChild(span);
	span.innerText = newToDo.text;
	btn.innerText = "X";
	btn.addEventListener("click", deleteToDo);
	toDoList.appendChild(li);
}

function toDoSubmit(event) {
	event.preventDefault();
	let toDo = toDoInput.value;
	const toDoObj = { text: toDo, id: Date.now() };
	toDos.push(toDoObj);
	saveToDo();
	paintToDo(toDoObj);
}

toDoForm.addEventListener("submit", toDoSubmit);
const savedToDos = localStorage.getItem("toDos");
if (savedToDos) {
	const parsedToDos = JSON.parse(savedToDos);
	toDos = parsedToDos;
	toDos.forEach((toDo) => {
		paintToDo(toDo);
	});
}
