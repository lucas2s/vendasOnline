import ISalespeopleDTO from './ISalespeopleDTO';

export default interface ICreateSalesDTO {
  salespeople: ISalespeopleDTO;
  value: number;
  salesDate: Date;
}
