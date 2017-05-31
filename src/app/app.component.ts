import {Component} from '@angular/core';
import {NgServiceWorker} from '@angular/service-worker';
import {Http} from '@angular/http';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(serviceWorker: NgServiceWorker, http: Http) {
    serviceWorker.registerForPush()
      .switchMap(subscription => http.post('http://localhost:8080/subscribe', subscription.toJSON()))
      .subscribe();
  }
}
