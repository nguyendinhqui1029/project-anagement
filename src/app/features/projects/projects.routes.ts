import { Routes } from '@angular/router';
import { ProjectsComponent } from '@features/projects/projects.component';
import { OverviewComponent } from '@features/projects/overview/overview.component';

export const ProjectsRouters: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':id', component: OverviewComponent },
  { path: ':id/backend', loadComponent: () => import('@features/projects/backend/backend.component').then(m => m.BackendComponent) },
  { path: ':id/frontend', loadComponent: () => import('@features/projects/frontend/frontend.component').then(m => m.FrontendComponent) },
  { path: ':id/planning-document', loadComponent: () => import('@features/projects/planning-document/planning-document.component').then(m => m.PlanningDocumentComponent) },
  { path: ':id/quality-assurance', loadComponent: () => import('@features/projects/quality-assurance/quality-assurance.component').then(m => m.QualityAssuranceComponent) },
  { path: ':id/sprint-retro', loadComponent: () => import('@features/projects/sprint-retro/sprint-retro.component').then(m => m.SprintRetroComponent) },
  { path: ':id/task-management', loadComponent: () => import('@features/projects/task-management/task-management.component').then(m => m.TaskManagementComponent) },
  { path: ':id/time-estimation-management', loadComponent: () => import('@features/projects/time-estimation-management/time-estimation-management.component').then(m => m.TimeEstimationManagementComponent) },
  { path: ':id/timeline-management', loadComponent: () => import('@features/projects/timeline-management/timeline-management.component').then(m => m.TimelineManagementComponent) },
  { path: ':id/reports-and-analytics', loadComponent: () => import('@features/projects/reports-and-analytics/reports-and-analytics.component').then(m => m.ReportsAndAnalyticsComponent) },
];