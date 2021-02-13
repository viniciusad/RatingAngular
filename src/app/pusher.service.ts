import { Injectable } from "@angular/core";
declare const Pusher: any;

@Injectable()
export class PusherService {
  constructor() {
    // Replace this with your pusher key
    this.pusher = new Pusher("fa9d58720afa1623683a", {
      cluster: "eu",
      encrypted: true,
    });
  }
  pusher;

  public init(channel:any) {
    return this.pusher.subscribe(channel);
  }
}
