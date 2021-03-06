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
  totalSalesvalue: string;
  totalSales: string;
  dailyAverageSales: string;
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

    const distincSales = sales.filter((sale: Sales) => {
      return (
        !this[JSON.stringify(sale.salespeople.salespeopleId)] &&
        (this[JSON.stringify(sale.salespeople.salespeopleId)] = true)
      );
    }, Object.create(null));

    const results = distincSales.map(result => ({
      ...result,
      totalSales: 1,
    }));

    results.forEach(result => {
      sales.forEach((sale: Sales) => {
        if (
          result.salespeople.salespeopleId === sale.salespeople.salespeopleId &&
          result.id !== sale.id
        ) {
          result.value = Number(result.value) + Number(sale.value);
          result.totalSales += 1;
        }
      });
    });

    results.sort((resultA, resultB) => {
      if (resultA.totalSales < resultB.totalSales) {
        return -1;
      }
      if (resultA.totalSales > resultB.totalSales) {
        return 1;
      }
      if (resultA.totalSales === resultB.totalSales) {
        if (resultA.value < resultB.value) {
          return -1;
        }
        if (resultA.value > resultB.value) {
          return 1;
        }
      }
      return 0;
    });

    results.reverse();

    const topSales: IResponse[] = results.map(result => ({
      salespeopleId: result.salespeople.salespeopleId,
      name: result.salespeople.name,
      totalSalesvalue: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(Number(result.value)),
      totalSales: result.totalSales.toLocaleString('pt-br'),
      dailyAverageSales: (result.totalSales / 7).toLocaleString('pt-br', {
        minimumFractionDigits: 3,
        maximumFractionDigits: 3,
      }),
    }));

    return topSales.slice(0, 10);
  }
}

export default ListTopSalesSalespeople;
