import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the WebsocketClientProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class WebsocketClientProvider {
  private connection: WebSocket;

  constructor() {
    console.log('Hello WebsocketClientProvider Provider');
  }

  public OnMessage(callback): void {
    this.connection.onmessage = callback;
  }

  public Init(): void{
    this.connection = new WebSocket('ws://localhost:8000/');
  }

  public Send(data): void {
    console.log("Message envoye !");
    this.connection.send(data);
  }

}
