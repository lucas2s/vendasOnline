import 'dotenv/config';
import express from 'express';

import routes from '@shared/infra/http/routes';
import '@shared/infra/typeorm';

const app = express();
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('*** Servidor iniciado na porta 3333 ***');
});
