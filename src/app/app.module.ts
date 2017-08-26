// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { WebPresenceComponent } from './web-presence/web-presence.component';
import { FooterComponent } from './footer/footer.component';

// Imports
import { Ng2PageScrollModule } from 'ng2-page-scroll';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    WebPresenceComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
