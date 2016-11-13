var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

gulp.task('sass', require('./gulp-tasks/sass')(gulp, plugins));

gulp.task('default', ['sass'], function () {
  gulp.watch('sass/**/*.{sass,scss}', ['sass']);
});
