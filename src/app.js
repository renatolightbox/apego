const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan')

const indexRouter = require('./modules/site/site.routes')

const { configureSession } = require('./middlewares/session')

const app = express();



//const usersRouter = require('./routes/users');
//const menu  = require('./src/routes/menu');
//const mural = require('./src/routes/mural-de-avisos');
//const boletos=require('./src/routes/boletos');
//ar login = require('./src/routes/login');
//const chat = require('./src/routes/chat');
//const perfil  = require('./src/routes/perfil');
//const quemSomos = require('./src/routes/quemSomos');
//const contato = require('./src/routes/contato');
//const SiteRouter = require('./modules/site/site.routes')




// view engine setup
app.set('views', path.join(__dirname, ''));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

configureSession(app)

app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/menu', menu);
//pp.use('/mural', mural);
//app.use('/boletos', boletos);
//app.use('/login', login);
//app.use('/chat', chat);
//app.use('/perfil', perfil);
//app.use('/quemSomos', quemSomos);
// app.use('/contato', contato);




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
  res.render('err');
});

module.exports = app;
