import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data = new Data();

  private dataSubject = new BehaviorSubject<Data>(this.data);
  currentData = this.dataSubject.asObservable();

  constructor() { }

  onChangeData(newData: Data): void {
    if (newData !== null) {
      this.dataSubject.next(newData);
    }
    else {
      const emptyData = new Data();
      emptyData.module = '';
      emptyData.dataObject = null;
      this.dataSubject.next(emptyData);
    }
  }

}

export class Data {
  module: string;
  dataObject: any;
}
