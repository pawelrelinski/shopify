export interface Producer {
  id: number | string;
  createdAt:
    | Date
    | {
        date: string;
        timezone_type: number;
        timezone: string;
      };
  name: string;
}
