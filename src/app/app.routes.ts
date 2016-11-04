import { Routes, RouterModule } from '@angular/router';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      redirectTo: 'dashboard', pathMatch: 'full'}
];
