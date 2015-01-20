var gulp = require('gulp');
var pkg = require('./package.json');
var common = require('./common/common');

var del           = require('del'),
    sass          = require('gulp-sass'),
    sourcemaps    = require('gulp-sourcemaps'),
    tap           = require('gulp-tap'),
    autoprefixer  = require('gulp-autoprefixer');

// Auto load all gulp plugins
var plug = require('gulp-load-plugins')();

// Load common utils
var _ = plug.loadUtils(['colors', 'env', 'log', 'date']);

// Create comments for minified files
var commentHeader = common.createComments(_);

// Use a prod/dev switch
// Run `gulp --production`
var type = _.env.production ? 'production' : 'development';
_.log('Building for', _.colors.magenta(type));
_.beep();


// TASKS
// ----------------------------

// Js linter
gulp.task('jshint', function() {
    return gulp.src(pkg.paths.source.js)
               .pipe(plug.jshint('.jshintrc'))
               .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function() {
    return gulp.src(pkg.paths.source.sassMain)
               .pipe(sass({
                   includePaths: pkg.paths.source.sass,
                   outputStyle: 'nested'
               }))
               .pipe(autoprefixer())
               .pipe(gulp.dest(pkg.paths.dest.css));
});

gulp.task('css', ['sass'], function() {
    return gulp.src(pkg.paths.source.css)
               .pipe(plug.size({showFiles: true}))
               .pipe(sourcemaps.init())
               .pipe(plug.minifyCss({}))
               .pipe(plug.concat(pkg.paths.dest.cssMain))
               .pipe(plug.header(commentHeader))
               .pipe(sourcemaps.write('.'))
               .pipe(gulp.dest(pkg.paths.dest.css))
               .pipe(plug.size({showFiles: true}));
});

gulp.task('clean', function(cb) {
    del([pkg.paths.dest.css], function(err, paths) {
        var msg = 'Deleted files/folders:\n' + paths.join('\n');
        _.log(_.colors.yellow(msg));

        cb();
    });
});
