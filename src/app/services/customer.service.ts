import { Injectable } from '@angular/core';
import { LocalHostService } from './local-host.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class CustomerService {
  BaseUrl: string;
  constructor(private locolHost: LocalHostService) {
    let BaseUrl = this.locolHost.getApiURI();
  }
  
  
}


