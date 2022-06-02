import { User } from '@modules/users/entities/user.entity';

export interface FindOneById {
  user: {
    firstName: User['firstName'];
    lastName: User['lastName'];
    email: User['email'];
  };
}
