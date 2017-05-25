'use strict';

// Get all the dependincies
var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber');

gulp.task('serve', ['sass', 'compress-js'], function() {

    gulp.watch(['./src/sass/**/*.sass'], ['sass',]);
    gulp.watch(['./src/js/*.js'], ['compress-js']);

});

// sass task
gulp.task('sass', function() {
    return gulp.src('./src/sass/**/*.*')
        .pipe(plumber())
        .pipe(sass.sync({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('./dist'));
});


// js compress task
gulp.task('compress-js', function () {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min'}))
        .pipe(gulp.dest('dist'));
});

// default task
gulp.task('default', ['serve']);