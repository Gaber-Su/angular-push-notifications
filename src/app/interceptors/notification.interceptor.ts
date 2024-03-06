import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MessagingService } from '../service/messaging.service';

@Injectable()
export class NotificationInterceptor implements HttpInterceptor {

  constructor(private messageSer: MessagingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(this.messageSer.currentMessage, 'message received in interceptow');

    // const isKeyAuthorization = request.headers.get('Authorization')?.startsWith('key=');




    // if (isKeyAuthorization) {
    //   console.log('this is reqight');
    //   console.log(this.messageSer.currentMessage.subscribe((res: any) => {
    //     console.log(res, 'response');

    //   }));


    // }


    return next.handle(request);
  }
}
