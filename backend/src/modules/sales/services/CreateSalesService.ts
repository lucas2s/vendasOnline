import { injectable, inject } from 'tsyringe';
import ISalesRepository from '../repositories/ISalesRepository';

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
  ) {}

  public async execute({
    salespeopleId,
    value,
    parseSalesDate,
  }: IRequest): Promise<Sales> {
    const sales = await this.salesRepository.create({
      salespeople: salespeopleId,
      value,
      salesDate: parseSalesDate,
    });

    return sales;
  }
}

export default CreateSalesService;
