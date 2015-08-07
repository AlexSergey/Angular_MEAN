var gulp = require('gulp');
var log  = require('./log');
var argv   = require('yargs').argv;
var useref = require('gulp-useref');
var sourcemaps = require('gulp-sourcemaps');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var processhtml = require('gulp-processhtml');
var config = require('./config');
var fs = require('fs');
var connect = require('gulp-connect');
var templateCache = require('gulp-angular-templatecache');
var iife = require("gulp-iife");
var concat = require('gulp-concat');
var header  = require('gulp-header');
var stripDebug = require('gulp-strip-debug');
var size = require('gulp-filesize');
var plumber = require('gulp-plumber');

module.exports = function() {
    gulp.task('jsLibs', function () {
        var assets = useref.assets();
        var isDev = argv.production === undefined;

        return gulp.src(config.source.index)
            .pipe(plumber({
                errorHandler: log
            }))
            .pipe(assets)
            .pipe(gulpif(!isDev, stripDebug()))
            .pipe(gulpif(isDev, sourcemaps.init()))
            .pipe(gulpif('*.js', uglify()))
            .pipe(gulpif(isDev, sourcemaps.write()))
            .pipe(assets.restore())
            .pipe(useref())
            .on('error', log)
            .pipe(processhtml({
                commentMarker: 'dev'
            }))
            .pipe(gulp.dest(config.dist.path))
            .pipe(connect.reload());
    });

    gulp.task('templates', function () {
        var isProduction = argv.production === undefined;

        return gulp.src(config.source.appPath + '/**/*.tpl.html')
            .pipe(plumber({
                errorHandler: log
            }))
            .pipe(templateCache(config.dist.js.templatesName, {
                module: 'templates',
                standalone: true
            }))
            .pipe(gulpif(!isProduction, uglify()))
            .pipe(gulp.dest(config.dist.js.path))
            .pipe(connect.reload())
    });

    gulp.task('jsApp', function() {
        fs.readFile(config.copyrightPath, "utf-8", function(err, copy) {
            var isProduction = argv.production !== undefined;
            if (isProduction) {
                gulp.src([config.source.js.path + '**/*.module.js', config.source.js.path + '**/*.js'])
                    .pipe(plumber({
                        errorHandler: log
                    }))
                    .pipe(iife({useStrict: false}))
                    .pipe(concat(config.dist.js.app))
                    .pipe(gulpif(isProduction, stripDebug()))
                    .pipe(gulpif(isProduction, uglify()))
                    .pipe(header(copy, config.copyright))
                    .pipe(size())
                    .pipe(gulp.dest('.'))
                    .pipe(connect.reload())
            } else {
                gulp.src([config.source.js.path + '**/*.module.js', config.source.js.path + '**/*.js'])
                    .pipe(plumber({
                        errorHandler: log
                    }))
                    .pipe(iife({useStrict: false}))
                    .pipe(gulpif(!isProduction, sourcemaps.init()))
                    .pipe(concat(config.dist.js.app))
                    .pipe(gulpif(isProduction, uglify()))
                    .pipe(gulpif(!isProduction, sourcemaps.write()))
                    .pipe(gulp.dest('.'))
                    .pipe(connect.reload())
            }
        });
    });
};