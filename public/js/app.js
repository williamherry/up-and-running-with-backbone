var AppRouter = Backbone.Router.extend({
  routes: {
    "": "list",
    "menu-items/new": "itemForm",
    "menu-items/:item": "itemDetails",
    "categories/:category": "categoryDetails"
  },

  initialize: function () {
    this.menuItemModel = new MenuItem();
    this.menuItemView = new MenuItemDetails(
      {
        model: this.menuItemModel
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

    this.menuCategoryView = new MenuCategoryView(
      {
        category: 'Entree',
        images: [
          "carrots.jpg",
          "green-beans.jpg",
          "mashed-potatoes.jpg"
        ]
      }
    );
  },

  list: function () {
    $('#app').html(this.menuView.render().el);
  },

  itemDetails: function (item) {
    this.menuItemModel.set('name', item);
    $('#app').html(this.menuItemView.render().el);
  },

  categoryDetails: function (category) {
    this.menuCategoryView.options.category = category;
    $('#app').html(this.menuCategoryView.render().el);
  },

  itemForm: function () {
    $('#app').html('New item form');
  }
});

var app = new AppRouter();

$(function() {
  Backbone.history.start();
});
