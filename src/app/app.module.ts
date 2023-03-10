import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./components/about/about.component";
import { LightboxComponent } from "./components/lightbox/lightbox.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LightboxModule } from "ngx-lightbox";
import { LazyLoadImageModule } from "ng-lazyload-image";
import { FormsModule } from "@angular/forms";
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { CommitteesComponent } from "./components/committees/committees.component";
import { TopicsComponent } from './components/topics/topics.component';
import { DatesComponent } from './components/dates/dates.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { SpeakersComponent } from './components/speakers/speakers.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LightboxComponent,
    ContactComponent,
    CommitteesComponent,
    TopicsComponent,
    DatesComponent,
    RegistrationComponent,
    SpeakersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LightboxModule,
    LazyLoadImageModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
