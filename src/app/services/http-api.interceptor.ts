import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { CommonService } from './common.service';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {
  constructor(private commonService: CommonService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    console.log('INCOMING REQUEST', request);
    this.commonService.showLoader();
    const clonedReq = request.clone({
      headers: request.headers.set('Authorization', 'Token'),
    });

    return next.handle(clonedReq).pipe(
      finalize(() => {
        setTimeout(() => {
          console.log('INCOMING RESPONSE');
          this.commonService.hideLoader();
        }, 2000);
      })
    );
  }
}
