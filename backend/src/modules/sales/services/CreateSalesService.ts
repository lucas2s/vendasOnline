import { injectable, inject } from 'tsyringe';
import ISalesRepository from '../repositories/ISalesRepository';

import Sales from '../infra/typeorm/schemas/Sales';
import Salespeople from '../infra/typeorm/schemas/Salespeople';

interface IRequest {
  salespeople: Salespeople;
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
    salespeople,
    value,
    parseSalesDate,
  }: IRequest): Promise<Sales> {
    const sales = await this.salesRepository.create({
      salespeople,
      value,
      salesDate: parseSalesDate,
    });

    return sales;
  }
}

export default CreateSalesService;
