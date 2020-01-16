// Make sure all environment configuration is properly initialized
require('dotenv').config();

import * as bodyparser from 'body-parser';
import compression from 'compression';
import express from 'express';
import routes from './routes';
import * as logger from './utils/logging';

const { APP_NAME, APP_PORT } = process.env;
const app = express();

logger.info(`${APP_NAME} intializing...`);

/*
    Initialize all third party middleware to make sure
    every request can be handled properly with the best performance.
*/
app.use(compression());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

/*
    Initialize all routes defined in the routes directory.
*/
app.use('v1', routes);

/*
    Start the application and listen on the port provided by process.env.
*/
app.listen(APP_PORT, () =>
  console.log(`${APP_NAME} is listening on port: ${APP_PORT}!`),
);
