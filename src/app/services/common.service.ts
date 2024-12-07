import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  isLoading = new BehaviorSubject(false);

  showLoader() {
    this.isLoading.next(true);
  }

  hideLoader() {
    this.isLoading.next(false);
  }
}
