import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { getMessaging, getToken } from "firebase/messaging"
import { BehaviorSubject } from 'rxjs'
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class MessagingService {
  currentMessage = new BehaviorSubject(null);
  constructor(private angularFireMessaging: AngularFireMessaging, private toastr: ToastrService) {
    this.angularFireMessaging.messages.subscribe(
      (_messaging: any) => {
        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }
  requestPermission() {

    this.angularFireMessaging.requestToken.subscribe(
      (token: any) => {
        console.log(token);
      },
      (err: any) => {
        console.error('Unable to get permission to notify.', err);
      }
    );


  }

  receiveMessage() {
    this.angularFireMessaging.messages.subscribe((payload: any) => {
      console.log(payload);
      this.toastr.success(payload.notification.body)


      const toastContainer = document.querySelector('.toast-container');

      if (toastContainer) {
        toastContainer.addEventListener('click', () => {
          // Navigate to your desired URL here
          window.location.href = 'https://www.google.com';
        });
      }

      this.currentMessage.next(payload);


    })
  }

  showCustomNotification(payload: any) {
    let notify_data = payload['notification'];
    let title = notify_data['title'];

    let options = {
      body: notify_data['body'],
      icon: '', // image from assets
      badge: '', // image from assets
      image: '', // image from assets
    }

    let notify: Notification = new Notification(title, options)
    notify.onclick = event => {
      event.preventDefault();
      window.location.href = 'https://www.google.com/'
    }
  }
}