import { User } from '@features/user/models/user';

export interface GetOneById {
  user: {
    firstName: User['firstName'];
    lastName: User['lastName'];
    email: User['email'];
  };
}
