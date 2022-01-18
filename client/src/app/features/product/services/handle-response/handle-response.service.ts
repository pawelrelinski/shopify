import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HandleResponseService {
  public handle(statusCode: number, callback: () => any): void {
    const codes = new Map<number, () => any>()
      .set(200, () => callback())
      .set(201, () => callback())
      .set(204, () => callback());

    const action = codes.get(statusCode) as () => any;
    action();
  }
}
