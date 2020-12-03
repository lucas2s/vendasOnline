import ICreateSalesDTO from '../dtos/ICreateSalesDTO';
import IListTopSalesDTO from '../dtos/IListTopSalesDTO';
import Sales from '../infra/typeorm/schemas/Sales';

export default interface ISalesRepository {
  findAllSalesSallesPeople(data: IListTopSalesDTO): Promise<Sales[]>;
  create(data: ICreateSalesDTO): Promise<Sales>;
}
