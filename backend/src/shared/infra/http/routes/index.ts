import { Router } from 'express';

import salesRouter from '@modules/sales/infra/http/routes/sales.routes';

const routes = Router();

routes.use('/sales', salesRouter);

export default routes;
