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

/*
By default angular run app twice to check the the app work perfectly
when the ui is not similar in both time it seems there is an error.
This is helpful when in the development mode to figure it out the potential error.
But we don't need this in the production mode enableProdMode help to convert
app into production mode
*/

// import { enableProdMode } from '@angular/core';

// check whether the app is production or development
// if true call the function enableProdMode


import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
