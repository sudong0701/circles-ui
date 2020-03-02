'use strict';

var gulp = require('gulp');
const sass = require("gulp-sass")
//sass 转 css
const autoprefixer = require('gulp-autoprefixer')
//浏览器兼容性自动补齐前缀
const rename = require('gulp-rename')
//重新命名文件或者文件夹
const concat = require('gulp-concat')
//将多个文件合并成一个文件
var cssmin = require('gulp-cssmin');
// css代码压缩

gulp.task('default', function() {
    return gulp.src('./src/*')
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
        .pipe(concat('index.css'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min' //rename只是给上一步骤产出的压缩的index.css重命名为style.min.css
        }))
        .pipe(gulp.dest('./lib'))
})
