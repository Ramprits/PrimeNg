import { Injectable } from '@angular/core';

@Injectable()
export class LocalHostService {
  _localHoatURI: string;
  _apiURI: string;
  constructor() {
    this._apiURI = 'https://localhost:44366/api';
    this._localHoatURI = 'https://localhost:44366/api/customers';
  }
  getApiURI() {
    return this._apiURI;
  }
  getLocalHostURL() {
    return this._localHoatURI;
  }
}
