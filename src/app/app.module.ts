import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServiceChildComponent } from './service-child/service-child.component';
import { ServiceChild2Component } from './service-child2/service-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ServicesComponent,
    PageNotFoundComponent,
    ServiceChildComponent,
    ServiceChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
