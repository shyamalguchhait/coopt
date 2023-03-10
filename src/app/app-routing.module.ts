import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { LightboxComponent } from "./components/lightbox/lightbox.component";
import { CommitteesComponent } from "./components/committees/committees.component";
import { TopicsComponent } from "./components/topics/topics.component";
import { DatesComponent } from "./components/dates/dates.component";
import { RegistrationComponent } from "./components/registration/registration.component";
import { SpeakersComponent } from "./components/speakers/speakers.component";
const routes: Routes = [
  { path: "about", component: AboutComponent },
  { path: "lightbox", component: LightboxComponent },
  { path: "contact", component: ContactComponent },
  { path: "committees", component: CommitteesComponent },
  { path: "topics", component: TopicsComponent },
  { path: "dates", component: DatesComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "speakers", component: SpeakersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
