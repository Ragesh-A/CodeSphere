import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // INTERPOLATION

  // data binding we can access the value in html
  // to access the value we use {{ variable name }}
  title = 'first-app';

  // PROPERTY BINDING
  
  //other way to access dom attribute and modify the value
  //<img [src]="imageUrl">
  imageUrl = 'path to image url'
  // <p [class.dark]='isDark'>
  isDark = true || false;

  // EVENT BINDING

  // TO BIND EVENT <button (click)="clickHandle()">

}
