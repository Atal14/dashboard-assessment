import { Routes } from '@angular/router';

export const DashboardRoutes: Routes = [
  {
    path: '',
    redirectTo: 'investments',
    pathMatch: 'full',
  },
  {
    path: 'investments',
    loadComponent: () =>
      import(
        './dashboard-main/components/investments/investments.component'
      ).then((a) => a.InvestmentsComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import(
        './dashboard-main/components/coming-soon/coming-soon.component'
      ).then((a) => a.ComingSoonComponent),
  },
];
