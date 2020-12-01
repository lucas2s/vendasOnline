import { injectable, inject } from 'tsyringe';
import ISalespeopleRepository from '../repositories/ISalespeopleRepository';

import Salespeople from '../infra/typeorm/schemas/Salespeople';

interface IRequest {
  name: string;
}

@injectable()
class CreateSalespeopleService {
  constructor(
    @inject('SalespeopleRepository')
    private salespeopleRepository: ISalespeopleRepository,
  ) {}

  public async execute({ name }: IRequest): Promise<Salespeople> {
    const salespeople = await this.salespeopleRepository.create({
      name,
    });

    return salespeople;
  }
}

export default CreateSalespeopleService;
