var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// Configuración de vistas
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Rutas
const profileRouter = require("./routes/profile");

app.use("/", indexRouter);
app.use("/profile", profileRouter);
app.use('/users', usersRouter);

// Manejo de errores 404
app.use((req, res, next) => {
  res.status(404).send("Página no encontrada");
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");

  // Iniciar el servidor
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
  });
});

module.exports = app;
