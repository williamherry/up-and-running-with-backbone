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

    this.menuView = new MenuView(
      {
        items: [
          "Garden Salad",
          "Pizza",
          "CheeseCake"
        ]
      }
    );
  },

  list: function () {
    $('#app').html(this.menuView.render().el);
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
