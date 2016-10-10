var counter = {};
var currentCatIndex = -1;


$(function() {

    var data = {
        currentId: null,
        cats: [{
						id: 'cat1',
						name: 'Cat1',
						src: 'img/cat-1.jpg',
						clicks: 0,
					}, {
						id:  'cat2',
						name: 'Cat 2',
						src: 'img/cat-2.jpg',
						clicks: 0,
					}, {
						id:  'cat3',
						name: 'Cat 3',
						src: 'img/cat-3.jpg',
						clicks: 0,
					}, {
						id:  'cat4',
						name: 'Cat 4',
						src: 'img/cat-4.jpg',
						clicks: 0,
					}, {
						id:  'cat5',
						name: 'Cat 5',
						src: 'img/cat-5.jpg',
						clicks: 0,
					},
				],
    	};


    var octopus = {
        selectCat: function(id) {
            data.currentId = id;
            selectionView.render();
        },

        getCurrentCat: function() {
            var cat = data.cats.find(function(cat) {
                return cat.id === data.currentId;
            });
            return cat;
        },

				getCats: function() {
          return data.cats;
        },

				catClicked: function(cat) {
					cat.clicks++;
				},

        init: function() {
            listView.init();
						selectionView.init();
        }
    };


    var listView = {
        init: function() {
            // grab elements and html for using in the render function
            this.$catsList = $('.cats-list');
            this.catsTemplate = $('script[data-template="cat-item"]').html();
						this.$catsList.on('click', 'li', function() {
							  var catId = this.getAttribute('data-id');
                octopus.selectCat(catId);
                return false;
						})

            this.render();
        },

        render: function() {
            // Cache vars for use in forEach() callback (performance)
            var $catsList = this.$catsList,
                catsTemplate = this.catsTemplate;

            // Clear and render
            $catsList.html('');
            octopus.getCats().forEach(function(cat) {
                // Replace template markers with data
                var thisTemplate = catsTemplate.replace(/{{id}}/g, cat.id);
								thisTemplate = thisTemplate.replace(/{{name}}/g, cat.name);
                $catsList.append(thisTemplate);
            });
        }
    };

		var selectionView = {
        init: function() {
					  // grab elements and html for using in the render function
						var that = this;
            this.$cat = $('.cat');
            this.catTemplate = $('script[data-template="cat"]').html();
						this.$cat.on('click', '.selected-cat',function() {
							var cat = octopus.getCurrentCat();
              octopus.catClicked(cat);
							that.render();
              return false;
						})
            this.render();
        },

        render: function() {
					var cat =  octopus.getCurrentCat();
					if (!cat) {
						return;
					}
					this.$cat.html('');
					var thisTemplate = this.catTemplate;
					var thisTemplate = thisTemplate.replace(/{{img}}/g, cat.src);
					thisTemplate = thisTemplate.replace(/{{id}}/g, cat.id);
					thisTemplate = thisTemplate.replace(/{{clicks}}/g, cat.clicks);
					this.$cat.append(thisTemplate);
        }
    };

    octopus.init();
}());