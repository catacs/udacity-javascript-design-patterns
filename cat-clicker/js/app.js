var counter = {};
var currentCatIndex = -1;
var cats = [
	{
		id: 'cat1',
		name: 'Cat1',
		src: 'img/cat-1.jpg',
	}, {
		id:  'cat2',
		name: 'Cat 2',
		src: 'img/cat-2.jpg',
	}, {
		id:  'cat3',
		name: 'Cat 3',
		src: 'img/cat-3.jpg',
	}, {
		id:  'cat4',
		name: 'Cat 4',
		src: 'img/cat-4.jpg',
	}, {
		id:  'cat5',
		name: 'Cat 5',
		src: 'img/cat-5.jpg',
	},
];
function app() {
	var catsContainer = document.getElementById('cats-container');
	var catsList = document.createElement('ul');
	catsContainer.appendChild(catsList);

	for (var i = 0; i < cats.length; i++ ) {
		var cat = cats[i];
		counter[cat.id] = 0;
		var catContainer = document.createElement("div");
		catContainer.id = cat.id;
		catContainer.className = 'hide';
		catContainer.addEventListener('click', handleCatClick, false);
		var catImage = document.createElement("img");
		catImage.src = cat.src;
		catImage.width = '300'; 

		var catLabel = document.createElement('p');
		catLabel.textContent = cat.name;

		var catCounter = document.createElement('p');
		catCounter.textContent = counter[cat.id];
		catCounter.id = cat.id + '-counter';

		catContainer.appendChild(catImage);
		catContainer.appendChild(catLabel);
		catContainer.appendChild(catCounter);
		catsContainer.appendChild(catContainer);

		var li = document.createElement('li');
		li.innerHTML = cat.name;
		li.addEventListener('click', handleShowCat, false);
		catsList.appendChild(li);
	}
}

function handleCatClick(event) {
	var currentCatId = event.target.parentElement.id;
	var element = document.getElementById(currentCatId + '-counter');
	
	var concreteCounter = counter[currentCatId];
	concreteCounter++;
	element.textContent = concreteCounter;
	counter[currentCatId] = concreteCounter;
}

function handleShowCat() {
	var previousCat = cats[currentCatIndex] || {};
	var previousId = previousCat.id || null;
	var previousElement = document.getElementById(previousId);
	if (previousElement) {
		previousElement.className = 'hide';
	}
	var index = getIndex(event.target);
	var id = cats[index].id;
	var element = document.getElementById(id);
	element.className = 'show';
	currentCatIndex = index;
}

function getIndex(element) { 
	var self = element;
	var parent = self.parentNode;
	var i = 0;
	while (self.previousElementSibling){
		i++;
		self = self.previousElementSibling
	}
	return element === parent.children[i] ? i : -1;
}

window.onload = function() {
	app();
}

