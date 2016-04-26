'use strict';

var gulp = require('gulp');
var del = require('del');
var stylus = require('gulp-stylus');
var browserSync = require('browser-sync').create();

gulp.task('css', _ =>
  gulp.src('./src/magicstar.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest('./dist/'))
);

gulp.task('serve', (done) => {
  browserSync.init({
    server: {
      baseDir: './',
      directory: true
    },
    ghostMode: false,
    port: 7410
  });
  done();
});

gulp.task('reload', (done) => {
  browserSync.reload();
  done();
});

gulp.task('watch', _ => {
  return gulp.watch([
    'src/**/*'
  ], gulp.series('css', 'reload'));
});

gulp.task('default', gulp.series('css', 'serve', 'watch'));