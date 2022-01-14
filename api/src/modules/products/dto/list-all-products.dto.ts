export class ListAllProductsDto {
  public sortBy: string;
  public sortMethod: 'asc' | 'desc';
  public take: number;
  public skip: number;
}
