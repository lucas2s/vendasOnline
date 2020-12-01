import CreateSalesDTO from '../dtos/ICreateSalesDTO';
import Sales from '../infra/typeorm/schemas/Sales';

export default interface ISalesRepository {
  create(data: CreateSalesDTO): Promise<Sales>;
}
