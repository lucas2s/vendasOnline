import Salespeople from '../infra/typeorm/schemas/Salespeople';

export default interface ICreateSalesDTO {
  salespeople: Salespeople;
  value: number;
  salesDate: Date;
}
