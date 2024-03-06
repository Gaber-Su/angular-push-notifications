import { Component, OnInit } from '@angular/core';
import { MessagingService } from './service/messaging.service';
type Point = { x: number; y: number };
type P = keyof Point
// let t :P = "x"
// type z = 5 | 7 | 0




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  message: any;
  messageTitle: any;
  title = 'firebase-messaing';
  test: P = "y"
  constructor(private messagingService: MessagingService) {
    let x: number = 9
    let y: typeof x = 10;
    let z: ReturnType<typeof this.f> = { x: 5, y: 5 }

    // let test = (document.getElementById("main_canvas") as HTMLImageElement).src = ''


  }

  ngOnInit() {
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage();

    this.messageTitle = this.messagingService.currentMessage
    // this.messagingService.currentMessage.subscribe((res: any) => {
    //   this.messageTitle = res?.notification.body

  }
  f() {
    return { x: 5, y: 7 }
  }


}
