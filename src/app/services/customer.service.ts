import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService extends BaseService {

  constructor(httpClient: HttpClient, private router: Router) {
    super(httpClient);
  }
  private urls = {
    getProccessData: 'api/Customers/Processes',
  };

  getProccessData(): Observable<any> {
    return this.httpGet(this.urls.getProccessData);
  }
}
