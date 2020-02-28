'use strict';

var gulp = require('gulp');
const rename = require('gulp-rename')
const concat = require('gulp-concat')
var cssmin = require('gulp-cssmin');

gulp.task('css', function() {
  return gulp.src('./src/*.css')
    .pipe(concat('index.css'))
    .pipe(cssmin())
      .pipe(rename({
          suffix: '.min' //rename只是给上一步骤产出的压缩的index.css重命名为style.min.css
      }))
      .pipe(gulp.dest('./lib'))
})
