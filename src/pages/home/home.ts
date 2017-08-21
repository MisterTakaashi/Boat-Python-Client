import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WebsocketClientProvider } from '../../providers/websocket-client/websocket-client';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [WebsocketClientProvider]
})
export class HomePage {
  firstSlide: number;

  constructor(public navCtrl: NavController, private websocketClient: WebsocketClientProvider) {
    this.firstSlide = 50;

    this.websocketClient.Init();

    this.websocketClient.OnMessage((evt) => {
      console.log("bonjour " + evt.data);
    });
  }

  public onSliderChange() {
    console.log(this.firstSlide);
  }

}
