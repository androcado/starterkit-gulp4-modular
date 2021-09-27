// TASK1
// REQUIRE
const require_gulpfile = require('../gulpfile.js');
const gulp = require_gulpfile.gulp;
const config = require_gulpfile.config;

function task2(cb) {
  console.log(config);
  // YOUR CODE HERE
  cb();
}

// EXPORT GULP TASK
exports.task2 = task2;
