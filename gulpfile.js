var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var shell = require('gulp-shell');
 
gulp.task('build', shell.task([
        'gitbook build'
]));

gulp.task('cp', shell.task([
        'git co gh-pages && cp -fR _book/* . && git ci -am gh-pages'
]));

gulp.task('publish', ['cp'], shell.task([
        'git push github gh-pages',
        'git co master'
]));

gulp.task('default', function() {
  return gulp.src('./_book/**/*')
    .pipe(ghPages({
      //origin: 'github' //, 
      remoteUrl: 'git@github.com:ULL-PFPDI-GITBOOK-1617/Elaboracion-de-Material-Docente-con-GitBook.git'
    }));
});
