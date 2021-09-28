/*
** starterkit-gulp4-modular
** andreeberle.de
*/

const gulp = require('gulp');
const config = require('./gulp-tasks/config.js');
exports.gulp = gulp;
exports.config = config;

// REQUIRE TASKS
const task_task1 = require(config.paths.tasks + '/task1');
const task1 = task_task1.task1

const task_task2 = require(config.paths.tasks + '/task2');
const task2 = task_task2.task2

function task0(cb) {
  console.log('task0');
  // YOUR CODE HERE
  cb();
};

var build = gulp.series(task0, task1, task2);

exports.build = build;
exports.task0 = task0;
exports.task1 = task1;
exports.task2 = task2;

exports.default = build;
