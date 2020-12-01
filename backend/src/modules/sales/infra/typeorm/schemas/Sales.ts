import { ObjectID } from 'mongodb';

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('sales')
class Sales {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  salespeople_id: string;

  @Column()
  name_salespeople: string;

  @Column()
  value: number;

  @Column()
  sales_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Sales;
