import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    jqxBarGaugeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
