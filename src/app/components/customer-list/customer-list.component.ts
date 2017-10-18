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
  loading: boolean = false;
  displayDialog: boolean = false;
  newCustomer: boolean = false;
  customer: CustomerDto = new newCustomer();
  constructor(private customerServices: CustomerService) { }
  ngOnInit() {
    this.loading = true;
    setTimeout(() => {
      this.customerServices.getCustomers().subscribe(customer => this.customers = customer);
      this.loading = false;
    }, 1000);
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
    let customer = new newCustomer();
    for (let prop in c) {
      customer[prop] = c[prop];
    }
    return customer;
  }
  delete(): void {
    console.log('hello');
  }
  save(): void {
    console.log('hello');
  }
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