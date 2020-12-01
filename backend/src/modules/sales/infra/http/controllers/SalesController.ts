import { Request, Response } from 'express';
import { parseISO } from 'date-fns';

import SalesRepository from '@modules/sales/infra/typeorm/repositories/SalesRepository';
import CreateSalesService from '@modules/sales/services/CreateSalesService';

const salesRepository = new SalesRepository();

export default class SalesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { salespeopleId, value, salesDate } = request.body;

    const parseSalesDate = parseISO(salesDate);

    const createSales = new CreateSalesService(salesRepository);

    const sales = await createSales.execute({
      salespeopleId,
      value,
      parseSalesDate,
    });

    return response.json(sales);
  }
}
