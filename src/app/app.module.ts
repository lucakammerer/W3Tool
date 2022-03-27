import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdsenseModule } from "ng2-adsense";
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-9088464670414911',
      adSlot: 1643258738
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
