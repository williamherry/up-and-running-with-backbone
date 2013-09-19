var MenuItem = Backbone.Model.extend({
  urlRoot: '/items',
  defaults: {
    category: 'Entrees',
    imagepath: 'no-image.jpg',
    name: ''
  }
});
