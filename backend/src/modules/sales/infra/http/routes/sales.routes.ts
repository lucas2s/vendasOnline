import { Router } from 'express';

import SalesController from '@modules/sales/infra/http/controllers/SalesController';

const salesRouter = Router();
const salesController = new SalesController();

salesRouter.post('/', salesController.create);
salesRouter.get('/rankingsalespeople', salesController.index);

export default salesRouter;
