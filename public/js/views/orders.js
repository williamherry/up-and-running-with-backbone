var OrdersView = Backbone.View.extend({

  render: function () {
    this.$el.html(Handlebars.templates.orders(this.collection));
    return this;
  }
});
