'use strict';

/**
 * 依赖模块
 * Module dependencies.
 */
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ejs = require('ejs');
var session = require('express-session');
var multer  = require('multer');

var routes = require('./server/routes/routes');

var app = express();
var environment = 'development';

app.set('env', environment);
//让ejs模板改为扩展名为html
app.engine('.html', ejs.__express);
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
var rootPath = __dirname + '/' + ('development' === app.get('env') ? 'app' : 'webapp');
app.use(favicon(rootPath + '/favicon.png'));
app.use(logger('dev'));
app.use(bodyParser({limit: '10mb'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('cookie'));

//上传文件中间件 https://www.npmjs.com/package/multer
app.use(multer({ dest: rootPath + '/upload/tmp',
  rename: function (fieldname, filename) {
    return  filename.replace(/\W+/g, '-').toLowerCase() + Date.now();
  },
  onFileUploadStart: function (file) {
    console.log(file.originalname + ' is starting ...');
  },
  onFileUploadComplete: function (file) {
    console.log(file.fieldname + ' uploaded to  ' + file.path);
  }
}));

// Populates req.session
app.use(session({
  resave: false, // don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'secret'
}));

//定义路由
routes(app);

// development only
if ('development' === app.get('env')) {
    app.use(require('less-middleware')(path.join(__dirname, 'app')));
    // view engine setup
    app.set('views', path.join(__dirname, 'app'));
    app.use(express.static(path.join(__dirname, 'app')));
    process.env.PORT = 9000;
} else {
    app.use(require('less-middleware')(path.join(__dirname, 'webapp')));
    app.set('views', path.join(__dirname, 'webapp'));
    app.use(express.static(path.join(__dirname, 'webapp')));
    process.env.PORT = 18080;//基于Baidu BEA3.0
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

var debug = require('debug')('lottery-analyses');
app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
