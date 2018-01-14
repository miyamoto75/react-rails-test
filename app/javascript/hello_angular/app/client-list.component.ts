import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'client-list',
  template: `
  <div class="row">
    <div class="col-md-6 col-md-offset-1">
      <div class="table-responsive">
        <table class="table">
          <thead>
            <tr>
              <th class="col-md-4 text-center">id</th>
              <th class="col-md-4 text-center">name</th>
              <th class="col-md-4 text-center">pref</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let client of clients">
              <td class="col-md-4 text-center">{{ client.id }}</td>
              <td class="col-md-4 text-center">{{ client.name }}</td>
              <td class="col-md-4 text-center">{{ client.pref }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button type="button" class="btn btn-primary" (click)="getClient()">顧客取得</button>
    </div>
  </div>
  `
})

export class ClientListComponent {
clients = [
{id: "xxx", name: "yyy", pref: "zzz"},
{id: "test", name: "testname", pref: "testpref"},
];

  getClient(): void {

  }

}
