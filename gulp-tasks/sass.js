module.exports = function (gulp, plugins) {
  return function () {
    gulp.src('sass/main.scss')
      .pipe(plugins.sass())
      .pipe(plugins.autoprefixer())
      .pipe(gulp.dest('app/css'));
  };
};
