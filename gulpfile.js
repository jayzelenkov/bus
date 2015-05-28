"use strict";

var browserify = require("browserify");
var watchify = require("watchify");
var gulp = require("gulp");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var gutil = require("gulp-util");
var assign = require("lodash.assign");

var customOpts = {
  entries: ["./js/app.js"],
  debug: false,
  basedir: "./"
};

var opts = assign({}, watchify.args, customOpts);
var b = watchify(browserify(opts));

function bundle() {
  return b.bundle()
    .on("error", gutil.log.bind(gutil, "browserify error"))
    .pipe(source("bundle.js"))
    .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("./dist/js/"));
}

gulp.task("default", ["scripts"], function () {});
gulp.task("scripts", bundle); // run gulp task
b.on("update", bundle); // on any dep update, runs the bundle
b.on("log", gutil.log); // output build logs to terminal
