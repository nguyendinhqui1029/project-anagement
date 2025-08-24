import { Routes } from '@angular/router';

export const routes: Routes = [
  { 
    path: '',
    loadChildren: () => import('@layout/layout.routes').then(m => m.LayoutRouters)   
  },
  { 
    path: 'login', 
    loadChildren: () => import('@features/login/login.routes').then(m => m.LoginRouters) 
  }
];
