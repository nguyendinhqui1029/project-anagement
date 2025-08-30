import { Routes } from '@angular/router';
import { ProjectsComponent } from '@features/projects/projects.component';
import { OverviewComponent } from '@features/projects/overview/overview.component';

export const ProjectsRouters: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':id', component: OverviewComponent }
];