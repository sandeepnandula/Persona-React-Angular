import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactToAngularPersonaInquiryComponent } from '../react-to-ang-person-inquiry.component';



@NgModule({
    declarations: [
        AppComponent,
        ReactToAngularPersonaInquiryComponent
    ],
    imports: [
        BrowserModule,
    ],
    providers: [],
    bootstrap: [AppComponent],

})
export class AppModule { }