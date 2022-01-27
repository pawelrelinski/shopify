import { User } from '@features/user/models';

export interface Review {
  customer: User;
  cratedAt:
    | Date
    | {
        date: string;
        timezone_type: number;
        timezone: string;
      };
  content: string;
  rating: number;
}
