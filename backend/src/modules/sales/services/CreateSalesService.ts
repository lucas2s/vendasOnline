import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ISalesRepository from '../repositories/ISalesRepository';
import ISalespeopleRepository from '../repositories/ISalespeopleRepository';
import Sales from '../infra/typeorm/schemas/Sales';

interface IRequest {
  salespeopleId: string;
  value: number;
  parseSalesDate: Date;
}

@injectable()
class CreateSalesService {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
    @inject('SalespeopleRepository')
    private salespeopleRepository: ISalespeopleRepository,
  ) {}

  public async execute({
    salespeopleId,
    value,
    parseSalesDate,
  }: IRequest): Promise<Sales> {
    const salespeople = await this.salespeopleRepository.find({
      id: salespeopleId,
    });

    if (!salespeople) {
      throw new AppError('Cliente inesistente.');
    }

    const sales = await this.salesRepository.create({
      salespeople: {
        salespeopleId: String(salespeople.id),
        name: salespeople.name,
      },
      value,
      salesDate: parseSalesDate,
    });

    return sales;
  }
}

export default CreateSalesService;
