import { Base } from '../../../core/entities/base.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity('user_address')
export class UserAddress extends Base {
  @Column({
    nullable: true,
  })
  country: string;

  @Column({
    nullable: true,
  })
  city: string;

  @Column({
    nullable: true,
  })
  postal_code: string;

  @Column({
    nullable: true,
  })
  street_name: string;

  @Column({
    nullable: true,
  })
  house_number: string;

  @ManyToOne(() => User, (user) => user.address)
  user: User;
}
