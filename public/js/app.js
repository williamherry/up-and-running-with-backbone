var AppRouter = Backbone.Router.extend({
  routes: {
    "": "list",
    "menu-items/new": "itemForm",
    "menu-items/:item": "itemDetails"
  },

  list: function () {
    $('#app').html('List screen');
  },

  itemDetails: function (item) {
    $('#app').html('Menu item: ' + item);
  },

  itemForm: function () {
    $('#app').html('New item form');
  }
});

var app = new AppRouter();

$(function() {
  Backbone.history.start();
});
