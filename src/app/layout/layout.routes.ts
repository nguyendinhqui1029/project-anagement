import { Routes } from "@angular/router";
import { MainComponent } from "@layout/main/main.component";

export const LayoutRouters: Routes = [
  { 
    path: '', 
    component: MainComponent,
    children: [
      { 
        path: '', 
        loadChildren: () => import('@features/dashboard/dashboard.routes').then(m => m.DashboardRouters) 
      }
    ]
  },
];