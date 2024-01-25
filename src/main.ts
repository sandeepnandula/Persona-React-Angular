/*
*  Protractor support is deprecated in Angular.
*  Protractor is used in this example for compatibility with Angular documentation tools.
*/
// import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
// import { AppModule } from './app/app.module';

// bootstrapApplication(AppModule,
//     {providers: [provideProtractorTestingSupport()]})
//   .catch(err => console.error(err));

  import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);