import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import 'express-async-errors';

import routes from '@shared/infra/http/routes';
import errorHandler from '@shared/infra/http/middlewares/handler';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();
app.use(express.json());
app.use(routes);

app.use(errorHandler);

app.listen(3333, () => {
  console.log('*** Servidor iniciado na porta 3333 ***');
});
