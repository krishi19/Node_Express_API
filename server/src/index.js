import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import serveFavicon from 'serve-favicon';

import routes from './routes.js';
import logger from './utils/logger.js';

const server = express();
dotenv.config();

server.use(serveFavicon('./public/favicon.ico'));

// const db = diskDb.connect('./db', ['cars']);

server.use(helmet());
server.use(morgan('common'));
server.use(bodyParser.json());

server.use(routes);

// console.log({port: process.env.PORT,
// password: process.env.PASSWORD});

// const PORT = 8000;

server.listen(process.env.PORT, () => {
  logger.info(`Listening on 127.0.0.1:${process.env.PORT}`);
});
