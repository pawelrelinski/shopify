import { Base } from '../../../core/entities/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { UserAddress } from './user-address.entity';

@Entity('user')
export class User extends Base {
  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({
    nullable: false,
    unique: true,
  })
  email: string;

  @Column()
  password: string;

  @Column({
    nullable: true,
  })
  last_login: Date;

  @Column({
    nullable: true,
  })
  phone_number: string;

  @Column({
    default: false,
  })
  is_deleted: boolean;

  @OneToMany(() => UserAddress, (userAddress) => userAddress.user)
  address: UserAddress[];
}
