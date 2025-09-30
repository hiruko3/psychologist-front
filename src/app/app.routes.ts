import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/navbar-component/navbar-component').then(m => m.NavbarComponent),
    outlet: 'navbar'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'profile/:id',
    loadComponent: () => import('./pages/profile/profile').then(m => m.Profile)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo : ''
  }
];
