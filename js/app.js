require("jquery")(function() {

var Backbone = require("backbone");
Backbone.$ = require("jquery");
Backbone._ = require("underscore");
Backbone.LocalStorage = require("backbone.localstorage");

var Schedule = require("./collection.schedule.js"),
    ScheduleRouter = require("./router.schedule.js"),
    ScheduleView = require("./view.schedule.js"),
    Time = require("./model.time.js"),
    TimeView = require("./view.time.js"),

    app,
    appRouter,
    route,
    inputData;

// initialize
inputData = require("./data.js");
app = new ScheduleView(inputData);
appRouter = new ScheduleRouter(app);


// open morning/evening schedule
Backbone.history.start();
route = (new Date()).getHours() <= 12 ? "morning" : "evening";
appRouter.navigate(route, {trigger: true, replace: true});

});
