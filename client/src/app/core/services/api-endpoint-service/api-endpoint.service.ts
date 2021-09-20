import {Injectable} from '@angular/core';
import {Constants} from '@config/constants';

@Injectable({
  providedIn: 'root'
})
export class ApiEndpointService {
  private constants!: Constants;

  constructor() {
    this.constants = new Constants();
  }

  public getDefaultApiEndpoint(): string {
    return this.constants.API_ENDPOINT;
  }
}
