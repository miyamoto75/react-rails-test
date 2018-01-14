import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'number-box',
  template: `
  <div class="row">
    <div class="col-md-6 col-md-offset-2">
      <h1>now is {{num}}</h1>
      <button class="btn btn-success" (click)="incHandle()">増やす</button>
      <button class="btn btn-danger" (click)="decHandle()">減らす</button>
    </div>
  </div>
  `
})

export class NumberBoxComponent {
  @Input() num;

  incHandle(): void {
    this.num++;
  }

  decHandle(): void {
    this.num--;
  }
}
