var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var browserSync = require('browser-sync').create();

gulp.task('less', function () {
  gulp.src('less/*.less')
    .pipe(less())
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['serve']);

gulp.task('serve', ['less'], function () {
  browserSync.init({
    server: "./"
  });

  gulp.watch("css/*.css").on('change', browserSync.reload);
  gulp.watch("index.html").on('change', browserSync.reload);
  gulp.watch("js/*.js").on('change', browserSync.reload);
  gulp.watch('less/*.less', ['less']);
});