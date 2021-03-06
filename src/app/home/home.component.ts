import { Component, OnInit } from '@angular/core';
import { Message } from '../chat/chat.component';
import { PusherService } from '../pusher.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private pusher: PusherService) {}
  messages: Array<Message> = [];

  ngOnInit() {
    const channel = this.pusher.init('chat');
    channel.bind('message', (data: any) => {
      this.messages = this.messages.concat(data);
    });
  }
}
