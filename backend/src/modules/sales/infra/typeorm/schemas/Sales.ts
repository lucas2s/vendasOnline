import {
  ObjectID,
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ObjectIdColumn,
} from 'typeorm';
import Salespeople from './Salespeople';

@Entity('sales')
class Sales {
  @ObjectIdColumn()
  id: ObjectID;

  @Column(type => Salespeople)
  salespeople: Salespeople;

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
