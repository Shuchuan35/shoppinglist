var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li");


function putLineThrough(e) {
	// console.log(e.target);
	if (e.target.className === "delete") {
		e.target.parentElement.remove();
	} else {
		e.target.classList.toggle("done");
	}
}

for (let i = 0; i < li.length; i++) {
	li[i].addEventListener('click', putLineThrough);
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	button.classList.add("delete");
	button.appendChild(document.createTextNode("Delete"));
	li.appendChild(document.createTextNode(input.value + " "));
	li.addEventListener("click", putLineThrough);
	li.appendChild(button);
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);