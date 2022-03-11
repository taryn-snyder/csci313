import { Component, VERSION } from '@angular/core';
import { PRODUCTS } from './data';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  tv = PRODUCTS[0];
  blueray = PRODUCTS[1];
  gameConsole = PRODUCTS[2];
  mobile = PRODUCTS[3];
}
