const express = require('express');
const app = express();
const path = require('path');
const responseInterceptor = require('./common/interceptor/response');
const cookieParser = require('cookie-parser');
const bullRoute = require('../src/jobs/bull-board');
const apiTesting = require('@/routes/api-testing.route');
const apiUser = require('@/routes/api-user.route');
const { exceptionHandler } = require('@common/exception-handler/exception-handler');

app.use(cookieParser());
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/bull', bullRoute);
app.use(express.static(path.join(__dirname, '../public')));

//custom
app.use(responseInterceptor);

//api testing
app.use('/api-user', apiUser);
app.use('/api-testing', apiTesting);

// app.use(exceptionHandler);

module.exports = app;
