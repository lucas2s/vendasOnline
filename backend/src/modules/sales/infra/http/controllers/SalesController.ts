import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateSalesService from '@modules/sales/services/CreateSalesService';

export default class SalesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { salespeopleId, value, salesDate } = request.body;

    const parseSalesDate = parseISO(salesDate);

    const createSales = container.resolve(CreateSalesService);

    const sales = await createSales.execute({
      salespeopleId,
      value,
      parseSalesDate,
    });

    return response.json(sales);
  }
}
