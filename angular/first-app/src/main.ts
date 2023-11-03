/* There are two type of compilation used by angular

1. JIT (Just In Time)
  - slower complier
  - larger file
  = needs to compile on server
  - error on browser

*/
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

/*

2. AOT (Ahead Of Time)
  - faster compile
  - smaller size
  - compile on delivery to browser
  - error on server
*/

// import { platformBrowser } from '@angular/platform-browser';


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
