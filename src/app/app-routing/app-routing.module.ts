import { NgModule } from "@angular/core";
// import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { Covid19Component } from "../covid19/covid19.component";
import { CountryDetailsComponent } from "../country-details/country-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full",
  },
  { path: "dashboard", component: Covid19Component },
  {
    path: "details",
    component: CountryDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
