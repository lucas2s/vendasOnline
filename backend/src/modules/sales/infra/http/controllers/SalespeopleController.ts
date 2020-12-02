import { Request, Response } from 'express';
import { container } from 'tsyringe';
import * as Yup from 'yup';

import CreateSalespeopleService from '@modules/sales/services/CreateSalespeopleService';
import FindSalespeopleService from '@modules/sales/services/FindSalespeopleService';

export default class SalespeopleController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;
    const data = { name };

    const schema = Yup.object().shape({
      name: Yup.string().required('Nome do vendedor é obrigatório.'),
    });

    await schema.validate(data, {
      abortEarly: false,
    });

    const createSalespeople = container.resolve(CreateSalespeopleService);

    const salespeople = await createSalespeople.execute({
      name,
    });

    return response.json(salespeople);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findSalespeople = container.resolve(FindSalespeopleService);

    const salespeople = await findSalespeople.execute({
      id,
    });

    return response.json(salespeople);
  }
}
