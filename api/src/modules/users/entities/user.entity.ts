import {
  BeforeInsert,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Order } from '../../orders/entities/order.entity';
import { Role } from '../../auth/enums/role.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
  })
  public email: string;

  @Column()
  public password: string;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  public role: Role;

  @OneToMany(() => Order, (order: Order) => order.user)
  public orders: Order[];

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
