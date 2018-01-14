import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
  <hr>
  <h1>Hello {{name}}</h1>
  <hr>
  <number-box num="10"></number-box>
  <hr>
  <client-list>Loading...</client-list>
  `
})
export class AppComponent {
  name = 'Angular!';
}
