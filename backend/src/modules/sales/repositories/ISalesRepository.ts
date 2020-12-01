import ICreateSalesDTO from '../dtos/ICreateSalesDTO';
import Sales from '../infra/typeorm/schemas/Sales';

export default interface ISalesRepository {
  create(data: ICreateSalesDTO): Promise<Sales>;
}
