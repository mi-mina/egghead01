import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <!-- #myInput is a reference. It allow us to access the value of this input -->
      <input #myInput type="text">
      <!-- type parentheses around the event you want to handle -->
      <!-- And then you assign that to a method in your class-->
      <!-- If we need to pass the event, we use $event -->
      <button (click)="onClick($event, myInput.value)">Click me</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  onClick (myEvent, value) {
    console.log(myEvent);
    console.log(value);
  }
  constructor() { }

  ngOnInit() {
  }

}
