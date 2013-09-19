var MenuCategoryView = Backbone.View.extend({
  render: function () {
    this.$el.html(Handlebars.templates.category(this.options));
    return this;
  }
});
