var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
 
gulp.task('default', function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages());
});
