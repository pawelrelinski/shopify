export interface ListAllProductsDto {
  sortBy: string;
  sortMethod: 'asc' | 'desc';
  take: number;
  skip: number;
}
