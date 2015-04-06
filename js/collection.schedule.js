var Backbone = require("backbone"),
    Time = require("./model.time.js");

module.exports = Backbone.Collection.extend({
  localStorage: new Backbone.LocalStorage("ebay-txl-bus-schedule"),
  model: Time
});
