var path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
const bodyParser= require('body-parser'); // parses form data & incoming req bodies from req.body
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('./models/db'); // application connects to db on startup

const apiRouter = require('./routes/index'); // get router index for api endpoints

var app = express();

var listener = app.listen(parseInt(process.env.PORT, 10), function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 6000
});

// allow CORS
app.use('/saveFormContent', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
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

app.use('/', apiRouter); // Any requests get passed to apiRouter

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/saveFormContent', apiRouter);

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
