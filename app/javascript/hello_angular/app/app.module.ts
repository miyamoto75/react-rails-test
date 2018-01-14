import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NumberBoxComponent } from './number-box.component';
import { ClientListComponent } from './client-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberBoxComponent,
    ClientListComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
