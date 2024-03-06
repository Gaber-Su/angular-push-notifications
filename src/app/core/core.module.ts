import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NotificationInterceptor } from '../interceptors/notification.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true }
  ],
  declarations: [CoreComponent]
})
export class CoreModule { }
