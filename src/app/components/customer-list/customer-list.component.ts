import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { CustomerDto } from '../../model/CustomerModel/CustomerDto';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  customers: CustomerDto[];
  display: boolean = false;
  displayDialog: boolean = false;
  newCustomer: boolean = false;
  customer: CustomerDto = new newCustomer();
  constructor(private customerServices: CustomerService) { }
  ngOnInit() {
    this.customerServices.getCustomers()
      .subscribe(customer => { this.customers = customer; });
  }
  showDialog() {
    this.display = true;
  }
  onRowSelect(event) {
    this.newCustomer = false;
    this.customer = this.cloneCustomer(event.data);
    this.displayDialog = true;
  }
  cloneCustomer(c: CustomerDto): CustomerDto {
    let car = new newCustomer();
    for (let prop in c) {
      car[prop] = c[prop];
    }
    return car;
  }
  delete(): void {

  }
  save(): void { }
}
class newCustomer implements CustomerDto {
  companyName: string;
  contactName: string;
  contactTitle: string;
  address: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
  phone: string;
  fax: string;
  constructor(
    companyName = '',
    contactName = '',
    contactTitle = '',
    address = '',
    city = '',
    region = '',
    postalCode = '',
    country = '',
    phone = '',
    fax = '', ) {
  }
}