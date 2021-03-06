/// <reference path="typings/tsd.d.ts"/>

var express = require('express');
var path = require('path');
var os = require('os');
var pkg = require('./package.json');

var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var multer = require('multer');
var errorHandler = require('errorhandler');
var mds = require('markdown-serve');
var winston = require('./server/logger.js');

var app = express();
app.locals.isProd = (app.get('env') === 'production');

// all environments
app.set('port', process.env.PORT || 5000);
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'vash');
app.use(favicon(__dirname + '/client/favicon.ico'));
app.use(logger('dev'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(express.static(path.join(__dirname, 'client')));

// routes

// other middleware
app.use(mds.middleware({
    rootDirectory: path.resolve(__dirname, 'content'),
    handler: function(markdownFile, req, res, next) {
        if (req.method !== 'GET') next();

        // limit access based on draft variable in front-matter
        if (markdownFile.meta && markdownFile.meta.draft && !req.isAuthenticated && !req.user.isAdmin) {
            next();
            return;
        }

        var model = { content: markdownFile.parseContent(), version: pkg.version, isProd: req.app.locals.isProd, meta: markdownFile.meta };

        var view = 'markdown';  // default view
        
        // if content file specifies view, we use that instead
        if (markdownFile.meta && markdownFile.meta.layout)
            view = markdownFile.meta.layout;

        res.render(view, model);
    }
}));

// error handling middleware should be loaded last
// log for all environments
app.use(function(err, req, res, next) {
    winston.error(req.method + ' ' + req.url + ': ' + err.stack);
    next(err);
});

if ('development' === app.get('env')) {
    app.use(errorHandler());
    app.set('host', 'http://localhost');
}


// start
app.listen(app.get('port'), function() {
    var h = (app.get('host') || os.hostname() || 'unknown') + ':' + app.get('port');
    console.log('Express server listening at %s', h);
    winston.info('Server started');
});

