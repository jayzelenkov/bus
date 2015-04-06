var $ = require("jquery"),
    Backbone = require("backbone");

module.exports = Backbone.Router.extend({
  initialize: function(app) {
    this.app = app;
  },

  routes: {
    ":type": "filter"
  },

  filter: function(type) {
    this.app.filterType = type;
    this.app.trigger("change:filterType");

    this.setActiveBtn(type);
  },

  setActiveBtn: function (type) {
    $(".btn-group .btn").each(function (btn) {
      var $this = $(this),
          selfType = $this.attr("href").substring(1);
      $this.toggleClass("active", type === selfType);
    });
  }
});
