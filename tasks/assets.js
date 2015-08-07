var gulp = require('gulp');
var log  = require('./log');
var argv = require('yargs').argv;
var config  = require('./config');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');

module.exports = function() {
    gulp.task('images', function() {
        gulp.src(config.source.images + '**/*', {base: config.source.images})
            .pipe(plumber({
                errorHandler: log
            }))
            .pipe(gulp.dest(config.dist.images))
            .pipe(connect.reload());
    });

    gulp.task('fonts', function() {
        gulp.src(config.source.fonts + '**/*', {base: config.source.fonts})
            .pipe(plumber({
                errorHandler: log
            }))
            .pipe(gulp.dest(config.dist.fonts))
            .pipe(connect.reload());
    });
}