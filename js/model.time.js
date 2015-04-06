var Backbone = require("backbone");

module.exports = Backbone.Model.extend({
  defaults: {
    dep: "00:00",
    type: "morning",
    shuttle: false,
    fav: false,
    active: false
  }
});
