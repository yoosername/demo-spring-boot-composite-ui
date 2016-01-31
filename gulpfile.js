var gulp = require('gulp');
var react = require('gulp-react');

gulp.task('default', function() {
  return gulp.src('src/main/resources/static/src/**/*.js')
      .pipe(react())
      .pipe(gulp.dest('src/main/resources/static/dist'));
});
