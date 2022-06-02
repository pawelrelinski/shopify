import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from '@modules/auth/enums/role.enum';
import { BaseEntity } from '@core/entities/base-entity';

@Entity()
export class UserRole extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.USER,
  })
  public name: Role;

  @Column({
    default: () => 'CURRENT_TIMESTAMP',
    type: 'timestamp',
  })
  public createdAt: string;
}
