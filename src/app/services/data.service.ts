import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  dataChanged = new EventEmitter<string>();

  sendData(msg: any) {
    this.dataChanged.emit(msg);
  }
}
