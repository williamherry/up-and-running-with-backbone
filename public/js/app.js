var AppRouter = Backbone.Router.extend({
  routes: {
    "": "list",
    "menu-items/new": "itemForm",
    "menu-items/:item": "itemDetails"
  },

  initialize: function () {
    this.menuItemView = new MenuItemDetails(
      {
        category: 'Entree',
        imagepath: 'garden-salad.jpg'
      }
    );
  },

  list: function () {
    $('#app').html('List screen');
  },

  itemDetails: function (item) {
    this.menuItemView.options.name = item;
    $('#app').html(this.menuItemView.render().el);
  },

  itemForm: function () {
    $('#app').html('New item form');
  }
});

var app = new AppRouter();

$(function() {
  Backbone.history.start();
});
