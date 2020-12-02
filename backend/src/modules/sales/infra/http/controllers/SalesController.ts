import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateSalesService from '@modules/sales/services/CreateSalesService';
import FindSalespeopleService from '@modules/sales/services/FindSalespeopleService';

export default class SalesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { salespeopleId, value, salesDate } = request.body;

    const findSalespeople = container.resolve(FindSalespeopleService);
    const salespeople = await findSalespeople.execute({
      id: salespeopleId,
    });

    if (!salespeople) {
      return response.status(400).json({ error: 'Cliente inesistente.' });
    }

    const parseSalesDate = parseISO(salesDate);

    const createSales = container.resolve(CreateSalesService);

    const sales = await createSales.execute({
      salespeople,
      value,
      parseSalesDate,
    });

    return response.json(sales);
  }
}
