import { container } from 'tsyringe';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import SalesRepository from '@modules/sales/infra/typeorm/repositories/SalesRepository';

container.registerSingleton<ISalesRepository>(
  'SalesRepository',
  SalesRepository,
);
