var counter = {};
var cats = [
	{
		id: 'cat1',
		name: 'Cat1',
		src: 'img/cat-1.jpg',
	}, {
		id:  'cat2',
		name: 'Cat 2',
		src: 'img/cat-2.jpg',
	},
];
function app() {
	var catsContainer = document.getElementById('cats-container');
	for (var i = 0; i < cats.length; i++ ) {
		var cat = cats[i];
		counter[cat.id] = 0;
		var catContainer = document.createElement("div");

		var catImage = document.createElement("img");
		catImage.id = cat.id;
		catImage.src = cat.src;
		catImage.addEventListener('click', handleCatClick, false);

		var catLabel = document.createElement('p');
		catLabel.textContent = cat.name;

		var catCounter = document.createElement('p');
		catCounter.textContent = counter[cat.id];
		catCounter.id = cat.id + '-counter';

		catContainer.appendChild(catImage);
		catContainer.appendChild(catLabel);
		catContainer.appendChild(catCounter);
		catsContainer.appendChild(catContainer);
		
	}
}

function handleCatClick(event) {
	var element = document.getElementById(event.target.id + '-counter');
	var concreteCounter = counter[event.target.id];
	concreteCounter++;
	element.textContent = concreteCounter;
	counter[event.target.id] = concreteCounter;
}

window.onload = function() {
	app();
}