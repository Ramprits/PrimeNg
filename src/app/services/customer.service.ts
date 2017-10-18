import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { CustomerDto } from '../model/CustomerModel/CustomerDto';

@Injectable()
export class CustomerService {
  constructor(private http: Http) { }

  getCustomers(): Observable<CustomerDto[]> {
    return this.http.get(`https://localhost:44366/api/customers`)
      .map((response: Response) => response.json());
  }
}