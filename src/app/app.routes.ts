import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./domains/dashboard/dashboard.routes').then(
        (t) => t.DashboardRoutes
      ),
    loadComponent: () =>
      import(
        './domains/dashboard/dashboard-main/dashboard-main.component'
      ).then((a) => a.DashboardMainComponent),
  },
];
