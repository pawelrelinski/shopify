export class ListAllProductsDto {
  public sortBy: string;
  public sortMethod: 'asc' | 'desc';
  public limit: number;
  public offset: number;
}
