import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Result } from '../models/result';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(public httpClient: HttpClient) { }

  protected httpGet(url: string): Observable<any> {
    const serviceUrl = environment.serviceURL + url;
    return this.httpClient.get(serviceUrl)
      .pipe(map(res => res as Result)
        , catchError(error => this.handleError(error)));
  }

  public handleError(error: any): Observable<any> {
    const errMsg = (error.Message) ? error.Message :
      error.status ? '${error.status} - ${error.statusText}' : 'Server error';
    return throwError(errMsg);
  }
}
