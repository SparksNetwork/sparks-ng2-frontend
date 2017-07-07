var gulp = require('gulp');
var $    = require('gulp-load-plugins')();
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');


//gulp sass
gulp.task('sass', function() {
  return gulp.src('src/assets/css/style.scss')
    .pipe(sourcemaps.init())
    .pipe($.sass(
      // {outputStyle: 'compressed'}
      )
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/css/'));
});

// gulp.task('default', ['sass'], function() {
//   gulp.watch(['src/assets/css/**/*.scss'], ['sass']);
// });


gulp.task('default', ['sass'], function() {
  gulp.watch(['src/assets/css/scss/**/*.scss'], ['sass']);
});