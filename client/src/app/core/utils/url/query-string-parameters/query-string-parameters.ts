export class QueryStringParameters {
  private params: Array<string> = [];

  constructor() {
  }

  public push(key: string, value: string): void {
    const encodeValue = encodeURI(value.toString());
    this.params.push([key, encodeValue].join('='));
  }

  public toString(): string {
    return this.params.join('&');
  }
}
