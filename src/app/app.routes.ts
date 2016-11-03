import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      redirectTo: 'dashboard', pathMatch: 'full'}
];
