import {
  Double,
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

import ISalespeopleDTO from '@modules/sales/dtos/ISalespeopleDTO';

@Entity('sales')
class Sales {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  salespeople: ISalespeopleDTO;

  @Column()
  value: Double;

  @Column()
  sales_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sales;
