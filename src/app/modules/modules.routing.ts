import { Routes } from "@angular/router";

//DASHBOARD MODULE
import { HomeComponent } from "./dashboard/home/home.component";


//ERROR MODULE
import { NotFoundComponent } from "./error/not-found/not-found.component";

export const errorRoutes: Routes = [
    { path: '', component: NotFoundComponent }
]


export const dashboardRoutes: Routes = [
    { path: '', component: HomeComponent }
]