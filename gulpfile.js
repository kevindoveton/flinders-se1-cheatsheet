var gulp = require('gulp'),
  pug = require('gulp-pug');

gulp.task('build', function() {
  gulp.src('index.pug')
  .pipe(pug())
  .pipe(gulp.dest('./'));
})

gulp.task('watch', ['build'], function() {
  gulp.watch('**/*.md', ['build']);
  gulp.watch('**/*.css', ['build']);
})

gulp.task('default', ['watch']);