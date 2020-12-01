import { Router } from 'express';

import SalespeopleController from '@modules/sales/infra/http/controllers/SalespeopleController';

const salespeopleRouter = Router();
const salespeopleController = new SalespeopleController();

salespeopleRouter.post('/', salespeopleController.create);
salespeopleRouter.get('/:id', salespeopleController.index);

export default salespeopleRouter;
