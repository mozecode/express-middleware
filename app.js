'use strict';

let express = require('express');
let app = express();

require('dotenv').config();

const logParams = (req, res, next) => {
    console.log('req.params', req.params.id );
    console.log('req.url from logParams', req.url );
    next();
  };
  let routes = require('./routes/');
  //middleware?
app.use(logParams);
app.use('/', routes);
// app.use(express.static(__dirname +'/templates/'));//on every request look for static html file here when this route

//error handling
app.use( (req, res, next) => {
    let error = new Error('Not Found, dummy');
    error.status = 404;
    next("Error 404, y'all", error);
  });

  app.use( (err, req, res, next) => {
    res.status( err.status || 500);
    res.json({
      message: "error 500 or somethin",
      err: err
    });
  });

  let port = process.env.PORT || 8080
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });