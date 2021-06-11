require('dotenv').config();
var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var path = require('path');
const bodyParser= require('body-parser'); // parses form data & incoming req bodies from req.body
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let port = 4200;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var listener = app.listen(parseInt(process.env.PORT, 10), function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

// allow CORS
app.use('/img', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'POST');
  next();
})
// found the above code wasn't cutting it so I employed the following two lines
app.use(cors());
app.options('*', cors());

app.use(bodyParser.json()); // handle JSON request bodies
app.use(bodyParser.urlencoded({ extended: true })); // handle x-www-form-urlencoded request bodies
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
