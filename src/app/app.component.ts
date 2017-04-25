import { Component, Inject } from '@angular/core';
// Option 1. We import Inject if we use the @Inject decorator

// Option 2
// If we inject we no longer need to import the class
// import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `<div>
  <app-simple-form></app-simple-form>
  {{mail.message}}
  <hr>
  {{api}}
  </div>`
})
export class AppComponent {
  title = 'app is working!';

  // Option 1
  // If we pass the class as a provider in app.module,
  // We inject by type
  // constructor (private mail: MailService) {

  // Option 2
  // @Inject decorator, we pass it the same string as in app.module
  constructor (
    @Inject('mail') private mail,
    @Inject('api') private api,
  ) {

  }
}
