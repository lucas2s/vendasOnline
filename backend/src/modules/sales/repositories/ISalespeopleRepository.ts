import ICreateSalespeopleDTO from '../dtos/ICreateSalespeopleDTO';
import IFindSalespeopleDTO from '../dtos/IFindSalespeopleDTO';
import Salespeople from '../infra/typeorm/schemas/Salespeople';

export default interface ISalespeopleRepository {
  create(data: ICreateSalespeopleDTO): Promise<Salespeople>;
  find(data: IFindSalespeopleDTO): Promise<Salespeople | undefined>;
}
