import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Bootstrap modules

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { WebPresenceComponent } from './web-presence/web-presence.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    WebPresenceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
