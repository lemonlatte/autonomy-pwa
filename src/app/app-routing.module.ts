import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PoiComponent } from './poi/poi.component';
import { ProfileComponent } from './profile/profile.component';
import { ReportSymptomComponent } from './report-symptom/report-symptom.component';
import { ReportBehaviorComponent } from './report-behavior/report-behavior.component';

const routes: Routes = [
  {path: "", redirectTo: "/landing", pathMatch: 'full'},
  {path: "landing", component: LandingComponent},
  {path: "signin", component: SigninComponent},
  {path: "signup", component: SignupComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "pois/:id", component: PoiComponent},
  {path: "locations/:lat/:long", component: PoiComponent},
  {path: "profile", component: ProfileComponent},
  {path: "report-symptom", component: ReportSymptomComponent},
  {path: "report-behavior", component: ReportBehaviorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
