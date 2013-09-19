var MenuView = Backbone.View.extend({

  template: Handlebars.compile(
    '<ul>' +
    '{{#each items}}<li>{{this}}</li>{{/each}}' +
    '</ul>'
  ),

  initialize: function () {
    this.listenTo(this.model, 'change', this.render);
  },

  render: function () {
    this.$el.html(this.template(this.model.attributes));
    return this;
  }

});
