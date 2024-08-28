import { Routes } from "@angular/router";
import { HomeComponent } from "./app/home/home.component";
import { HouseDetailsComponent } from "./app/house-details/house-details.component";

const routeConfig: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: "Home",
  },
  {
    path: "details/:id",
    component: HouseDetailsComponent,
    title: "Details Component",
  },
];

export default routeConfig;
