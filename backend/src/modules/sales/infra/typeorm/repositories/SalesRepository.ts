import { getMongoRepository, MongoRepository } from 'typeorm';

import ISalesRepository from '../../../repositories/ISalesRepository';
import ICreateSalesDTO from '../../../dtos/ICreateSalesDTO';
import IListTopSalesDTO from '../../../dtos/IListTopSalesDTO';

import Sales from '../schemas/Sales';

class SalesRepository implements ISalesRepository {
  private ormRepository: MongoRepository<Sales>;

  constructor() {
    this.ormRepository = getMongoRepository(Sales);
  }

  public async create({
    salespeople,
    value,
    salesDate,
  }: ICreateSalesDTO): Promise<Sales> {
    const sales = this.ormRepository.create({
      salespeople,
      value,
      sales_date: salesDate,
    });

    await this.ormRepository.save(sales);

    return sales;
  }

  public async findAllSalesSallesPeople({
    startDate,
    endDate,
  }: IListTopSalesDTO): Promise<Sales[]> {
    const sales = await this.ormRepository.find({
      where: {
        sales_date: {
          $gte: startDate,
          $lte: endDate,
        },
      },
    });

    return sales;
  }
}

export default SalesRepository;
