var counter = 0;
function app() {
	var element = document.getElementById('cat-clicker');
	element.addEventListener('click', handleCatClick, false);
}

function handleCatClick() {
	var element = document.getElementById('click-counter');
	counter++;
	element.textContent = counter;
}

window.onload = function() {
	app();
}