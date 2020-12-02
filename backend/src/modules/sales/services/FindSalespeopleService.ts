import { injectable, inject } from 'tsyringe';
import ISalespeopleRepository from '../repositories/ISalespeopleRepository';

import Salespeople from '../infra/typeorm/schemas/Salespeople';

interface IRequest {
  id: string;
}

@injectable()
class FindSalespeopleService {
  constructor(
    @inject('SalespeopleRepository')
    private salespeopleRepository: ISalespeopleRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Salespeople | undefined> {
    const salespeople = await this.salespeopleRepository.find({ id });
    return salespeople;
  }
}

export default FindSalespeopleService;
