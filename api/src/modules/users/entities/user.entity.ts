import {
  BeforeInsert,
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  JoinTable,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsEmail } from 'class-validator';
import { Order } from '@modules/orders/entities/order.entity';
import { Role } from '@modules/auth/enums/role.enum';
import { UserRole } from '@modules/users/entities/user-role.entity';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class User extends BaseEntity {
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
  @IsEmail()
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

  @ManyToMany(() => UserRole)
  @JoinTable()
  public roles: UserRole[];

  @OneToMany(() => Order, (order: Order) => order.user)
  public orders: Order[];

  @BeforeInsert()
  public async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
