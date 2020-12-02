import { getMongoRepository, MongoRepository } from 'typeorm';

import ISalespeopleRepository from '../../../repositories/ISalespeopleRepository';
import ICreateSalespeopleDTO from '../../../dtos/ICreateSalespeopleDTO';
import IFindSalespeopleDTO from '../../../dtos/IFindSalespeopleDTO';

import Salespeople from '../schemas/Salespeople';

class SalespeopleRepository implements ISalespeopleRepository {
  private ormRepository: MongoRepository<Salespeople>;

  constructor() {
    this.ormRepository = getMongoRepository(Salespeople);
  }

  public async create({ name }: ICreateSalespeopleDTO): Promise<Salespeople> {
    const salespeople = this.ormRepository.create({
      name,
    });

    await this.ormRepository.save(salespeople);

    return salespeople;
  }

  public async find({
    id,
  }: IFindSalespeopleDTO): Promise<Salespeople | undefined> {
    try {
      const salespeople = await this.ormRepository.findOne(id);
      return salespeople;
    } catch (error) {
      const salespeople = undefined;
      return salespeople;
    }
  }
}

export default SalespeopleRepository;
