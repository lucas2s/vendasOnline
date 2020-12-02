import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';
import * as Yup from 'yup';

import CreateSalesService from '@modules/sales/services/CreateSalesService';

export default class SalesController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { salespeopleId, salesDate } = request.body;
    let { value } = request.body;
    value = value.toLocaleString('pt-br', { minimumFractionDigits: 2 });

    const data = { salespeopleId, value, salesDate };

    const schema = Yup.object().shape({
      salespeopleId: Yup.string().required('Id do vendedor é obrigatório.'),
      salesDate: Yup.date().required('Data da venda obrigatória.'),
      value: Yup.number()
        .moreThan(0, 'Valor da venda deve ser maior que 0.')
        .required(),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

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
