export interface ListAllProductsDto {
  sortBy: string;
  sortMethod: 'ASC' | 'DESC';
  take: number;
  skip: number;
  category: string;
}
