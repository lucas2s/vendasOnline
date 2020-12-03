import { injectable, inject } from 'tsyringe';
import { subDays, startOfDay } from 'date-fns';

import ISalesRepository from '../repositories/ISalesRepository';
import Sales from '../infra/typeorm/schemas/Sales';

interface IRequest {
  endDate: Date;
}

interface IResponse {
  salespeopleId: string;
  name: string;
  value: number;
  media: number;
}

@injectable()
class ListTopSalesSalespeople {
  constructor(
    @inject('SalesRepository')
    private salesRepository: ISalesRepository,
  ) {}

  public async execute({ endDate }: IRequest): Promise<IResponse[]> {
    const auxStarDate = subDays(endDate, 7);

    const startDate = startOfDay(auxStarDate);

    const sales = await this.salesRepository.findAllSalesSallesPeople({
      startDate,
      endDate,
    });

    const results = sales.filter((sale: Sales) => {
      return (
        !this[JSON.stringify(sale.salespeople.salespeopleId)] &&
        (this[JSON.stringify(sale.salespeople.salespeopleId)] = true)
      );
    }, Object.create(null));

    results.forEach((result: Sales) => {
      sales.forEach((sale: Sales) => {
        if (
          result.salespeople.salespeopleId === sale.salespeople.salespeopleId &&
          result.id !== sale.id
        ) {
          result.value = Number(result.value) + Number(sale.value);
        }
      });
    });

    console.log(results);

    return results;
  }
}

export default ListTopSalesSalespeople;
