/*
 * For source
 * */
var source = './client/source/';
var appPath = source + 'app/';
var assets = source + 'assets/';
var imagesSource = assets + 'images/';
var fontsSource = assets + 'fonts/';
var stylesheets = assets + 'stylesheets/';
var mainLess = stylesheets + '_include.less';

/*
 * For dist
 * */
var dist = './client/dist/';
var distCss = dist + 'css/';
var cssFile = 'all.css';
var distJs = dist + 'js/';
var templatesName = 'templates.js';
var appName = 'application.js';
var app = distJs + 'application.js';
var templates = distJs + templatesName;
var imagesDist = dist + 'images/';
var fontsDist = dist + 'fonts/';

var jsdocPath = 'client/source/app/';

var copyrightFile = './copyright.txt';

var htmlFile = 'index.html';

var config = {
    source: {
        appPath: appPath,
        index: source + htmlFile,
        styles: {
            stylesheets: stylesheets,
            mainLess: mainLess
        },
        js: {
            path: appPath
        },
        images: imagesSource,
        fonts: fontsSource
    },

    dist: {
        path: dist,
        css: distCss,
        index: dist + htmlFile,
        name: cssFile,
        js: {
            templatesName: templatesName,
            path: distJs,
            templates: templates,
            app: app
        },
        images: imagesDist,
        fonts: fontsDist
    },

    copyrightPath: copyrightFile,

    copyright: {
        name: 'Angular Boilerplate 1.0',
        url: 'http://github',
        year: 2015,
        company: 'http://gooddev.org'
    },

    deploy: {
        host: '',
        user: '',
        password: '',
        path: 'gooddev.org/www/ANGULAR'
    },

    host: 'http://localhost',
    port: 3000,

    jsdocPath: jsdocPath
};

module.exports = config;