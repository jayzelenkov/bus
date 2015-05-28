var $ = require("jquery"),
    _ = require("underscore"),
    Backbone = require("backbone");

module.exports = Backbone.View.extend({
  tagName: "tr",
  template: $("#timeTemplate").html(),

  events: {
    "click td>span[data-fav]": "toggleFav"
  },

  render: function() {
    var tmpl = _.template(this.template),
        attrs = this.model.toJSON();

    this.$el
      .html(tmpl(this.model.toJSON()))
      .toggleClass("warning", attrs.active);

    this.$el.find("span[data-shuttle]")
      .text(attrs.shuttle ? "shuttle bus" : "BVG \u2116 620")
      .toggleClass("label-danger", attrs.shuttle)
      .toggleClass("label-default", !attrs.shuttle);

    this.$el.find("span[data-fav]")
      .toggleClass("glyphicon-star", attrs.fav)
      .toggleClass("glyphicon-star-empty", !attrs.fav);

    return this;
  },

  toggleFav: function() {
    var toggleVal = !this.model.get("fav");
    this.model.set("fav", toggleVal).save();
    this.render();
  }
});
