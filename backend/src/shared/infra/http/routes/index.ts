import { Router } from 'express';

import salesRouter from '@modules/sales/infra/http/routes/sales.routes';
import salespeopleRouter from '@modules/sales/infra/http/routes/salespeople.routes';

const routes = Router();

routes.use('/sales', salesRouter);
routes.use('/salespeople', salespeopleRouter);

export default routes;
