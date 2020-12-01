import { Router } from 'express';
import { parseISO } from 'date-fns';

import SalesRepository from '@modules/sales/infra/typeorm/repositories/SalesRepository';
import CreateSalesService from '@modules/sales/services/CreateSalesService';

const salesRouter = Router();
const salesRepository = new SalesRepository();

salesRouter.post('/', async (request, response) => {
  const { salespeopleId, value, salesDate } = request.body;

  const parseSalesDate = parseISO(salesDate);

  const createSales = new CreateSalesService(salesRepository);

  const sales = createSales.execute({
    salespeopleId,
    value,
    parseSalesDate,
  });

  return response.json(sales);
});

export default salesRouter;
