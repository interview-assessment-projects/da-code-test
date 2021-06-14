require('dotenv').config();
var path = require('path');
var createError = require('http-errors');
const cors = require('cors');
var express = require('express');
var logger = require('morgan');

require('./da-api/models/db'); // application connects to db on startup

const apiRouter = require('./da-api/routes/index'); // get router index for api endpoints

var app = express();

var listener = app.listen(parseInt(process.env.PORT, 10), function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

app.use(cors());
app.options('*', cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/saveFormContent', apiRouter);

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
    res.json({
      message: err.message,
      error: err
  });
});

module.exports = app;
