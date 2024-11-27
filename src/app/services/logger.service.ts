import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggerService {
  constructor() {}

  logMyMessage(msg: any) {
    console.log('Message', msg);
  }
}
