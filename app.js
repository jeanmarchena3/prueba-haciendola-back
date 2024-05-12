const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');
const logger = require('morgan');
const config = require('./config');
const utils = require('./utils');
const middlewares = require('./middleware');

const app = express();

const logDirectory = path.join(__dirname, 'logs');

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory);
}

const assignId = (req, res, next) => {
  req.id = uuidv4();
  next();
};

app.use(assignId);

const accessLogStream = rfs.createStream('access.log', {
  interval: '1d',
  path: logDirectory,
});

logger.token('id', req => req.id);

app.use(logger('tiny', { stream: accessLogStream }));

/* ROUTERS */

const userRouter = require('./routes/user');
const productRouter = require('./routes/product');

const whitelist = config.get('cors.urls').split(',');
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || whitelist.indexOf('*') !== -1) {
      callback(null, true);
    } else {
      console.log(`Error cors origin: ${origin}`);
      const error = 'CORS_VALIDATION';
      callback(error);
    }
  },
};

app.options('*', cors(corsOptions));
app.use(cors(corsOptions));

app.use((err, req, res, next) => {
  if (err) {
    return utils.errorResponse(res, err);
  }
  next();
});

app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(middlewares.authentication, middlewares.authenticationCallback);

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// catch 404 and forward to error handler
app.use((req, res) => {
  const error = 'NO_ENCONTRADO';
  utils.errorResponse(res, error);
});

module.exports = app;
