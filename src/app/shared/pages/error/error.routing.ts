import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const errorRoutes: Routes = [
    { path: '', component: NotFoundComponent }
];
