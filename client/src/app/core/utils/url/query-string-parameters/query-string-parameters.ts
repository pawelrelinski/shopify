export class QueryStringParameters {
  private params: Array<string> = [];

  public push(key: string, value: string | undefined): void {
    const encodeValue = value ? encodeURI(value.toString()) : null;
    this.params.push([key, encodeValue].join('='));
  }

  public toString(): string {
    return this.params.join('&');
  }
}
