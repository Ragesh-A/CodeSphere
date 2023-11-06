import { Component } from "@angular/core";

@Component({
  selector: '[app-header]',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent{ }

// the selector can be do in a four ways
/*
  name            | usage          |  shown in DOM
-------------------------------------------------------------------
1-Html Tag        |  app-header    | <app-header></app-header>
2-Html Attribute  | [app-header]   | <div app-header></div>
3-Css class       | .app-header    | <div class="app-header"></div>
5 Html Id         | #app-header    | <div id="app-header"></div>
*/

// MOST OF TIME WE WILL USE HTML TAG AS COMPONENT
// HTML ATTRIBUTE ARE USED FOR DIRECTIVES