var button = document.getElementById("enter");
var reset = document.getElementById("reset");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function resetList() {
	ul.innerHTML = ""
}

function clear() {
	this.parentElement.remove();
}

function done() {
	this.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
	var doneButton = document.createElement("button")
	li.appendChild(document.createTextNode(input.value + " "));
	doneButton.appendChild(document.createTextNode("delete"));
	li.appendChild(doneButton);
	ul.appendChild(li);
	input.value = "";
	li.addEventListener("click", done)
	doneButton.addEventListener("click", clear)
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
reset.addEventListener("click", resetList);
