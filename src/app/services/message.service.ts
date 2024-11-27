import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private loggerService: LoggerService) {}

  getMessage() {
    return 'Hello this message is from MESSAGE SERVICE';
  }

  getAllMessages() {
    const allMsgs = [
      'Hello this message is from MESSAGE SERVICE1',
      'Hello this message is from MESSAGE SERVICE2',
      'Hello this message is from MESSAGE SERVICE3',
      'Hello this message is from MESSAGE SERVICE4',
      'Hello this message is from MESSAGE SERVICE5',
    ];

    return allMsgs;
  }

  printMsg(msg: any) {
    this.loggerService.logMyMessage(msg);
  }
}
