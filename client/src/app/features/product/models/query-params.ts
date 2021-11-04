export interface QueryParams {
  category: string;
  sortBy: string;
  sortMethod: 'asc' | 'desc';
  limit: number;
  offset: number;
}
