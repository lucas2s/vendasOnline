import { container } from 'tsyringe';

import ISalesRepository from '@modules/sales/repositories/ISalesRepository';
import SalesRepository from '@modules/sales/infra/typeorm/repositories/SalesRepository';

import ISalespeopleRepository from '@modules/sales/repositories/ISalespeopleRepository';
import SalespeopleRepository from '@modules/sales/infra/typeorm/repositories/SalespeopleRepository';

container.registerSingleton<ISalesRepository>(
  'SalesRepository',
  SalesRepository,
);

container.registerSingleton<ISalespeopleRepository>(
  'SalespeopleRepository',
  SalespeopleRepository,
);
