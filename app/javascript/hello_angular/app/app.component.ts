import { Component } from '@angular/core';

@Component({
  selector: 'hello-angular',
  template: `
  <h1>Hello {{name}}</h1>
  <number-box num="10"></number-box>
  `
})
export class AppComponent {
  name = 'Angular!';
}
