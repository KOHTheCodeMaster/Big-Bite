import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home/home1/home1.component';
import { Home2Component } from './home/home2/home2.component';
import { LeftAd1Component } from './home/home1/left-ad1/left-ad1.component';
import { RightAd1Component } from './home/home1/right-ad1/right-ad1.component';
import { MidContent1Component } from './home/home1/mid-content1/mid-content1.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Home1Component,
    Home2Component,
    LeftAd1Component,
    RightAd1Component,
    MidContent1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
