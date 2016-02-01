var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('transform-jsx-and-copy', function() {
  return gulp.src('plugins/**/*.js')
      .pipe(react())
      .pipe(gulp.dest('src/main/resources/static'));
});

gulp.task('copy-css', function() {
  return gulp.src('plugins/**/*.css')
      .pipe(gulp.dest('src/main/resources/static'));
});

gulp.task('copy-vendor-libs', function() {
  return gulp.src("bower_components/**")
      .pipe(gulp.dest('src/main/resources/static/vendor'))

});

gulp.task('default', ['transform-jsx-and-copy', 'copy-css', 'copy-vendor-libs']);
