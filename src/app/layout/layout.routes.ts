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
      },
      { 
        path: 'projects', 
        loadChildren: () => import('@features/projects/projects.routes').then(m => m.ProjectsRouters) 
      },
      { 
        path: 'meetings', 
        loadChildren: () => import('@features/meetings/meetings.routes').then(m => m.MeetingRouters) 
      },
      { 
        path: 'settings', 
        loadChildren: () => import('@features/settings/settings.routes').then(m => m.SettingsRouters) 
      },
      { 
        path: 'mini-games', 
        loadChildren: () => import('@features/mini-games/mini-games.routes').then(m => m.MiniGamesRouters) 
      }
    ]
  },
];