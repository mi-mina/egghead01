import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service'

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  // Option 1. Passing the class to a provider:
  // providers: [MailService],

  // Option 2. Providing with objects
  // Passing an object. 'mail' is any value
  providers: [
    {provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'http://whatever'}],
  // Provide objects can also useValue
  bootstrap: [AppComponent]
})
export class AppModule { }
