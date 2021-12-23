export interface Customer {
  id: string | number;
  createdAt:
    | Date
    | {
        date: string;
        timezone_type: number;
        timezone: string;
      };
  name: string;
}
